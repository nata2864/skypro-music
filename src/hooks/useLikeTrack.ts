import { Track } from '@/sharesTypes/sharesTypes';
import { useAppSelector, useAppDispatch } from '@store/store';
import { useState } from 'react';
import { withReauth } from '@/utils/withReauth';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { addLike, removeLike } from '@/services/tracks/tracksApi';
import { addLikedTracks, removeLikedTracks } from '@store/features/trackSlice';
import { toast } from 'react-toastify';

type returnTypeHook = {
  isLoading: boolean;
  toggleLike: () => void;
  isLike: boolean;
};

export const useLikeTrack = (track: Track | null): returnTypeHook => {
  const { favoritePlayList } = useAppSelector((state) => state.tracks);

  const dispatch = useAppDispatch();

  const access = useAppSelector((state) => state.auth.access);
  const refresh = useAppSelector((state) => state.auth.refresh);

  const isLike = favoritePlayList.some((t) => t._id === track?._id);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLike = () => {
    if (!access) {
      return toast.error('Нет авторизации');
    }

    const actionApi = isLike ? removeLike : addLike;
    const actionSlice = isLike ? removeLikedTracks : addLikedTracks;

    setIsLoading(true);

    if (track) {
      withReauth(
        (newToken: string) => actionApi(newToken || access, track._id),
        refresh,
        dispatch,
        access,
      )
        .then(() => {
          dispatch(actionSlice(track));
        })
        .catch((error) => {
          handleAxiosError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return {
    isLoading,
    toggleLike,
    isLike,
  };
};
