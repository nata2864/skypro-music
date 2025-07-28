'use client';

import { useEffect, useState } from 'react';
import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { fetchAllFavoriteTracks } from '@/services/tracks/tracksApi';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { withReauth } from '@/utils/withReauth';
import { useAppDispatch, useAppSelector } from '@store/store';
import { setFavoritePlayList } from '@store/features/trackSlice';

export default function MyTracks() {
  const access = useAppSelector((state) => state.auth.access);
  const refresh = useAppSelector((state) => state.auth.refresh);
  const tracks = useAppSelector((state) => state.tracks.favoritePlayList);
  const dispatch = useAppDispatch();

  const [isReady, setIsReady] = useState(false);
  const isUnauthenticated = !access;

  useEffect(() => {
    if (isUnauthenticated) return;

    const getAllFavoriteTracks = async () => {
      try {
        const data = await withReauth(
          fetchAllFavoriteTracks,
          refresh,
          dispatch,
          access,
        );

        if (data) {
          dispatch(setFavoritePlayList(data));
        }
      } catch (error) {
        handleAxiosError(error);
      } finally {
        setIsReady(true);
      }
    };

    getAllFavoriteTracks();
  }, [access, refresh, dispatch]);

  return <CenterBlock title="Мои треки" tracks={tracks} isLoading={!isReady} />;
}
