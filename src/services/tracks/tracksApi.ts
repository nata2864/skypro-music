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

export async function fetchTracksByID(id): Promise<Track[]> {
  try {
    const response = await api.get(API_ENDPOINTS.GET_SELECTION_BY_ID(id));
    //  const response = await api.get(`https://webdev-music-003b5b991590.herokuapp.com/catalog/selection/${id}/`)
     console.log(response)
    
    return response.data.data; // проверь, что именно приходит: data.tracks или просто data
  } catch (error: any) {
    throw new Error(error.message || 'Ошибка запроса');
  }
}


