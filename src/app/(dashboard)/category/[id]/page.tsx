'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { fetchTracksByID } from '@/services/tracks/tracksApi';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Track } from '@/sharesTypes/sharesTypes';
import { CategoryTrack } from '@/sharesTypes/sharesTypes';
import { AxiosError } from 'axios';
import { ERROR_MESSAGES } from '@/constans/errorMessages';
import { useSelector } from 'react-redux';
import { fetchAllTracks } from '@/services/tracks/tracksApi';

export default function CategoriesPlaylist() {
  const params = useParams();
  console.log(params.id);

  const [allTracks, setAllTracks] = useState<Track[]>([]);
  const [tracks, setTracks] = useState<[]>([]);
  const [error, setError] = useState('');

  const idTracks = Number(params.id);

  // if (playList.length === 0) {
  //   console.log('Need to load data from server')
  // }

  const getTracksById = useCallback(async () => {
    try {
      const allTracksdata = await fetchAllTracks();
      const data = await fetchTracksByID(idTracks);
      if (allTracksdata) setAllTracks(allTracksdata);
      if (data) setTracks(data.items);
      console.log(data.name);
      console.log(data.items);
      console.log(allTracks);
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
    getTracksById();
  }, []);

  useEffect(() => {
    console.log('allTracks обновился:', allTracks);
  }, [allTracks]);

  return (
    <>
      <CenterBlock
        title={`Плейлист дня ${params.id}`}
        tracks={tracks}
        error={error}
      />
    </>
  );
}
