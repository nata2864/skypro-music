'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { fetchAllTracks } from '@/services/tracks/tracksApi';
import { Track } from '@/sharesTypes/sharesTypes';

import { useEffect, useCallback, useState } from 'react';

import { handleAxiosError } from '@/utils/handleAxiosError';

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);

  const getAllTracks = useCallback(async () => {
    try {
      const data = await fetchAllTracks();
      if (data) setTracks(data);
    } catch (error) {
      handleAxiosError(error);
    }
  }, []);

  useEffect(() => {
    getAllTracks();
  }, []);

  return (
    <>
      <CenterBlock title="Треки" tracks={tracks} />
    </>
  );
}
