type FormatValidationResult = {
  hasErrors: boolean;
  errors: Record<string, boolean>;
  errorMessage?: string;
};

type FormValues = {
  email: string;
  password: string;
  [key: string]: string; 
};

export const formatValidator = (values: FormValues): FormatValidationResult => {
  const errors: Record<string, boolean> = {};
  let hasErrors = false;
  let errorMessage = '';


  const email = values.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = true;
    hasErrors = true;
    errorMessage ||= 'Неверный формат email';
  }

 
  const password = values.password;
  if (password.length < 6) {
    errors.password = true;
    hasErrors = true;
    errorMessage ||= 'Пароль должен быть не менее 6 символов';
  }

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
if (!passwordRegex.test(password)) {
  errors.password = true;
  hasErrors = true;
  errorMessage ||= 'Пароль должен содержать как минимум одну букву и одну цифру';
}


  if ('confirmPassword' in values) {
    if (values.confirmPassword !== password) {
      errors.confirmPassword = true;
      hasErrors = true;
      errorMessage ||= 'Пароли не совпадают';
    }
  }


  if ('username' in values) {
    const username = values.username.trim();
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    if (!usernameRegex.test(username)) {
      errors.username = true;
      hasErrors = true;
      errorMessage ||= 'Имя пользователя должно содержать минимум 3 символа без спецсимволов';
    }
  }

  return { hasErrors, errors, errorMessage };
};
