'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { fetchAllTracks } from '@/services/tracks/tracksApi';
import { Track } from '@/sharesTypes/sharesTypes';
import { AxiosError } from 'axios';
import { useEffect, useCallback, useState } from 'react';
import { ERROR_MESSAGES } from '@/constans/errorMessages';

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [error, setError] = useState('');

  const getAllTracks = useCallback(async () => {
    try {
      const data = await fetchAllTracks();
      if (data) setTracks(data);
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          setError(error.response.data);
        } else if (error.request) {
          console.log(error.request);
          setError(ERROR_MESSAGES.NETWORK_ERROR);
        } else {
          console.log('Error', error.message);
          setError(ERROR_MESSAGES.UNKNOWN_ERROR);
        }
      }
    }
  }, []);

  useEffect(() => {
    getAllTracks(); // ← именно вызываем функцию
  }, []);

  return (
    <>
    
      <CenterBlock title="Треки" tracks={tracks} error={error}/>
    </>
  );
}
