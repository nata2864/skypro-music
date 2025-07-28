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

export async function addLike(access: string, id: string | number) {
  return await api.post(
    API_ENDPOINTS.ADD_TO_FAVORITES(id),
    {},
    {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    },
  );
}

export async function removeLike(access: string, id: string | number) {
  return await api.delete(API_ENDPOINTS.REMOVE_FROM_FAVORITES(id), {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
}

export async function fetchAllFavoriteTracks(access: string): Promise<Track[]> {
  const response = await api.get(API_ENDPOINTS.GET_FAVORITES, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
  return response.data.data;
}
