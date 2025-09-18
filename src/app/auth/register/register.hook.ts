'use client';
import { useState } from 'react';

import {
  RegisterUserSchema,
  RegisterUserSchemaType,
} from '@/common/validations/register-user.schema';

const INITIAL_FORM_STATE: RegisterUserSchemaType = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const useRegister = () => {
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
    setFormState(INITIAL_FORM_STATE);
  };

  return {
    error,
    formState,
    handleFieldChange,
    handleFormSubmit,
  };
};

export default useRegister;
