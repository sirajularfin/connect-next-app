'use client';
import { useState } from 'react';

import {
  LoginUserSchema,
  LoginUserSchemaType,
} from '@/common/validations/login-user.schema';
import { usePostLoginMutation } from '@/integrations/http/endpoints/auth.api';
import { useLazyGetProfileQuery } from '@/integrations/http/endpoints/profile.api';

const INITIAL_FORM_STATE: LoginUserSchemaType = {
  email: '',
  password: '',
};

const useLogin = () => {
  const [triggerGetProfile] = useLazyGetProfileQuery();
  const [triggerPostLoginMutation, { isLoading }] = usePostLoginMutation();

  const [error, setError] = useState<{
    properties?: Record<string, string[]>;
  }>();
  const [formState, setFormState] =
    useState<LoginUserSchemaType>(INITIAL_FORM_STATE);

  const handleFieldChange = (
    field: keyof LoginUserSchemaType,
    value: string
  ) => {
    setFormState(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validatedFields = LoginUserSchema.safeParse(formState);

    if (!validatedFields.success) {
      setError({
        properties: validatedFields.error.flatten().fieldErrors,
      });
      return;
    }
    setError(undefined);
    triggerPostLoginMutation(formState)
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

export default useLogin;
