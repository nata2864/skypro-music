'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Track } from '@/sharesTypes/sharesTypes';
import { CategoryTrack } from '@/sharesTypes/sharesTypes';
import { fetchAllTracks, fetchTracksByID } from '@/services/tracks/tracksApi';
import { handleAxiosError } from '@/utils/handleAxiosError';

export default function CategoriesPlaylist() {
  const params = useParams();
  const idTracks = Number(params.id);

  const [tracks, setTracks] = useState<CategoryTrack | null>(null);
  const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

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
      handleAxiosError(error);
    }
  }, [idTracks]);

  useEffect(() => {
    getTracksById();
  }, []);

  return (
    <>
      <CenterBlock title={tracks?.name || ''} tracks={filteredTracks} />
    </>
  );
}
