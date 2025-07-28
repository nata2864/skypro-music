import { API_ENDPOINTS } from '../../api/eindpoints';
import api from '@/api/axious';

type signInUserProps = {
  email: string;
  password: string;
};

type signUpUserProps = signInUserProps & {
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

export async function getToken(data: signInUserProps) {
  const response = await api.post(API_ENDPOINTS.GET_TOKEN, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
}

export async function refreshToken(refresh: string) {
  const response = await api.post(
    API_ENDPOINTS.REFRESH_TOKEN,
    { refresh },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
}
