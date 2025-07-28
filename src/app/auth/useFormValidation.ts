'use client';

import { useState } from 'react';
import { emptyFieldsValidator } from '@/validators/emptyFieldsValidator';

type FormData = Record<string, string>;
type Errors = Record<string, boolean>;

export const useFormValidation = (initialFields: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialFields);
  const [errors, setErrors] = useState<Errors>({});
  const [error, setError] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
    setError('');
  };

  const validateForm = (requiredFields: string[]): boolean => {
    const { hasEmpty, errors: emptyErrors } = emptyFieldsValidator(
      formData,
      requiredFields,
    );

    if (hasEmpty) {
      setErrors(emptyErrors);
      setError('Пожалуйста, заполните все поля');
      return false;
    }
    setErrors({});
    setError('');
    return true;
  };

  return {
    formData,
    setFormData,
    errors,
    error,
    setError,
    setErrors,
    handleChange,
    validateForm,
  };
};
