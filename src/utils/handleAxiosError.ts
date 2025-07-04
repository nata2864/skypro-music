import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import axios from 'axios';

export const handleAxiosError = (error: unknown): void => {
      console.log('🪵 handleAxiosError получил:', error);
  let message = 'Произошла неизвестная ошибка';

  if (axios.isAxiosError(error)) {
    if (error.response) {
            console.log('📦 error.response:', error.response);
      console.log('📄 error.response.data:', error.response.data);
      console.log('🔢 error.response.status:', error.response.status);
      const status = error.response.status;
      const serverMessage = error.response.data?.message;

      switch (status) {
        case 400:
          message = serverMessage || 'Некорректный запрос';
          break;
        case 401:
          message = 'Неавторизован. Пожалуйста, войдите заново.';
          break;
        case 403:
          message = 'Доступ запрещён';
          break;
        case 404:
          message = 'Ресурс не найден';
          break;
        case 412:
          message = serverMessage || 'Запрос отклонён. Требуется выполнение дополнительных условий.';
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
