'use client';

import { useState } from 'react';

import {
  RegisterUserSchema,
  RegisterUserSchemaType,
} from '@/common/validations/register-user.schema';
import { usePostRegistrationMutation } from '@/integrations/http/endpoints/auth.api';
import { useLazyGetProfileQuery } from '@/integrations/http/endpoints/profile.api';

const INITIAL_FORM_STATE: RegisterUserSchemaType = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const useRegister = () => {
  const [triggerGetProfile] = useLazyGetProfileQuery();
  const [triggerPostRegistrationMutation, { isLoading }] =
    usePostRegistrationMutation();

  const [error, setError] = useState<{
    properties?: Record<string, string[]>;
  }>();
  const [formState, setFormState] =
    useState<RegisterUserSchemaType>(INITIAL_FORM_STATE);

  const handleFieldChange = (
    field: keyof RegisterUserSchemaType,
    value: string
  ) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validatedFields = RegisterUserSchema.safeParse(formState);

    if (!validatedFields.success) {
      setError({
        properties: validatedFields.error.flatten().fieldErrors,
      });
      return;
    }
    setError(undefined);
    triggerPostRegistrationMutation(formState)
      .unwrap()
      .then(() => {
        triggerGetProfile();
      });
    setFormState(INITIAL_FORM_STATE);
  };

  return {
    error,
    isLoading,
    formState,
    handleFieldChange,
    handleFormSubmit,
  };
};

export default useRegister;
