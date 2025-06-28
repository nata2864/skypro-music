import { API_ENDPOINTS } from '../../api/eindpoints';
import api from '@/api/axious';
import { Track } from '@/sharesTypes/sharesTypes';

export async function fetchAllTracks(): Promise<Track[]> {
  try {
    const response = await api.get(API_ENDPOINTS.GET_ALL_TRACKS);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message || 'Ошибка запроса');
  }
}


