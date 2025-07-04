'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { fetchTracksByID } from '@/services/tracks/tracksApi';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Track } from '@/sharesTypes/sharesTypes';
import { CategoryTrack } from '@/sharesTypes/sharesTypes';
import { AxiosError } from 'axios';
import { ERROR_MESSAGES } from '@/constans/errorMessages';
import { fetchAllTracks } from '@/services/tracks/tracksApi';

export default function CategoriesPlaylist() {
  const params = useParams();
  const idTracks = Number(params.id);

  const [tracks, setTracks] = useState<CategoryTrack | null>(null);
  const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);
  const [error, setError] = useState('');

  const getTracksById = useCallback(async () => {
    try {
      const allTracksdata = await fetchAllTracks();
      const data = await fetchTracksByID(idTracks);

      if (data) setTracks(data);

      const filteredSortedTracks = data.items
        .map((id) => allTracksdata.find((track) => track._id === id))
        .filter((track): track is Track => track !== undefined);

      setFilteredTracks(filteredSortedTracks);
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
  }, [idTracks]);

  useEffect(() => {
    getTracksById();
  }, []);

  return (
    <>
      <CenterBlock
        title={tracks?.name || ''}
        tracks={filteredTracks}
        error={error}
      />
    </>
  );
}
