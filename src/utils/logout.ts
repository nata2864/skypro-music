import { clearUser } from '@store/features/authSlice';
import type { AppDispatch } from '@store/store';

export const logout = (
  dispatch: AppDispatch,
  router: { push: (href: string) => void },
) => {
  dispatch(clearUser());
  router.push('/auth/signin');
};
