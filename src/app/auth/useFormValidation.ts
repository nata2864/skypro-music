'use client';

import { ERROR_MESSAGES } from '@/constans/errorMessages';
import { useState } from 'react';

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
    let newErrors: Errors = {};
    let isValid = true;

    for (const field of requiredFields) {
      if (!formData[field]?.trim()) {
        newErrors[field] = true;
        isValid = false;
      }
    }

    if (!isValid) {
      setError(ERROR_MESSAGES.REQUIRED_FIELDS);
    }

    setErrors(newErrors);
    return isValid;
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
