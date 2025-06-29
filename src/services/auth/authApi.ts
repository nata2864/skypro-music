import { API_ENDPOINTS } from '../../api/eindpoints';
import api from '@/api/axious';


export async function signInUser() {
  try {
    const response = await api.post(
      API_ENDPOINTS.SIGN_IN,
      {}, 
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || 'Ошибка запроса');
  }
}

export async function signUpUser() {
  try {
    const response = await api.post(
      API_ENDPOINTS.SIGN_UP,
      {}, 
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || 'Ошибка запроса');
  }
}


