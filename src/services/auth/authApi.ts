import { API_ENDPOINTS } from '../../api/eindpoints';
import api from '@/api/axious';

type signInUserProps = {
  email: string;
  password: string;
};

type signUpUserProps = {
  email: string;
  password: string;
  username: string;
};

export async function signInUser(data: signInUserProps) {
  const response = await api.post(API_ENDPOINTS.SIGN_IN, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function signUpUser(data: signUpUserProps) {
  const response = await api.post(API_ENDPOINTS.SIGN_UP, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}
