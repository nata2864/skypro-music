import { toast } from 'react-toastify';
import axios from 'axios';

export const handleAxiosError = (error: unknown): void => {
  let message = 'Произошла неизвестная ошибка';

  if (axios.isAxiosError(error)) {
    if (error.response) {
      const status = error.response.status;
      const serverMessage = error.response.data?.message;

      switch (status) {
        case 400:
          message = serverMessage || 'Некорректный запрос';
          break;
        case 401:
          message =
            serverMessage || 'Пользователь с таким email или паролем не найден';
          break;
        case 403:
          message = serverMessage || 'Введенный Email уже занят';
          break;
        case 404:
          message = serverMessage || 'Ресурс не найден';
          break;
        case 412:
          message =
            serverMessage ||
            'Запрос отклонён. Требуется выполнение дополнительных условий';
          break;
        case 500:
          message = 'Ошибка на сервере. Попробуйте позже.';
          break;
        default:
          message = serverMessage || `Ошибка: ${status}`;
      }
    } else if (error.request) {
      message = 'Нет ответа от сервера. Проверьте интернет.';
    } else {
      message = 'Ошибка при отправке запроса';
    }
  }

  toast.error(message);
};
