import { API_ENDPOINTS } from '../../api/eindpoints';
import api from '@/api/axious';
import { Track, CategoryTrack } from '@/sharesTypes/sharesTypes';

export async function fetchAllTracks(): Promise<Track[]> {
  const response = await api.get(API_ENDPOINTS.GET_ALL_TRACKS);
  return response.data.data;
}

export async function fetchTracksByID(
  id: string | number,
): Promise<CategoryTrack> {
  const correctedId = Number(id) + 1;

  if (isNaN(correctedId)) {
    throw new Error('Некорректный ID');
  }

  const response = await api.get(
    API_ENDPOINTS.GET_SELECTION_BY_ID(correctedId),
  );

  return response.data.data;
}
