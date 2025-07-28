'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { fetchAllTracks } from '@/services/tracks/tracksApi';
import { useAppDispatch, useAppSelector } from '@store/store';
import { useEffect, useCallback } from 'react';
import { setCurrentPlayList, setIsLoading } from '@store/features/trackSlice';
import { handleAxiosError } from '@/utils/handleAxiosError';

export default function Home() {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.tracks.playList);
  const isLoading = useAppSelector((state) => state.tracks.isLoading);

  const getAllTracks = useCallback(async () => {
    dispatch(setIsLoading(true));
    try {
      const data = await fetchAllTracks();
      if (data) dispatch(setCurrentPlayList(data));
    } catch (error) {
      handleAxiosError(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    getAllTracks();
  }, []);

  return (
    <div>
      <CenterBlock title="Треки" tracks={tracks} isLoading={isLoading} />
    </div>
  );
}
