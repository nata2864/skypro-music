'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { fetchTracksByID } from '@/services/tracks/tracksApi';
import { useParams } from 'next/navigation';
import { useCallback,useEffect,useState } from 'react';
// import { Track } from '@/sharesTypes/sharesTypes';
import { CategoryTrack } from '@/sharesTypes/sharesTypes';
import { AxiosError } from 'axios';
import { ERROR_MESSAGES } from '@/constans/errorMessages';

export default function CategoriesPlaylist() {
  const params = useParams();
  console.log(params.id)
    const [tracks, setTracks] = useState<[]>([]);
    const [error, setError] = useState('');

    

  const getTracksById = useCallback(async () => {
    try {
      const data = await fetchTracksByID(params.id);
      if (data) setTracks(data.items);
      console.log(data.name)
      console.log(data.items);
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
    getTracksById(); // ← именно вызываем функцию
  }, []);



  return (
    <>
      <CenterBlock title={`Плейлист дня ${params.id}`} tracks={tracks}  error={error}/>
    </>
  );
}
