import { useAppDispatch } from '@store/store';
import { useEffect } from 'react';
import {
  setAccessToken,
  setRefreshToken,
  setUserName,
} from '@store/features/authSlice';

export const useInitAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const username = localStorage.getItem('username') || '';
    const access = localStorage.getItem('access') || '';
    const refresh = localStorage.getItem('refresh') || '';

    dispatch(setUserName(username));
    dispatch(setAccessToken(access));
    dispatch(setRefreshToken(refresh));
  }, [dispatch]);
};
