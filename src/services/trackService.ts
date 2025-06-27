import { API_ENDPOINTS } from '../api/eindpoints';
import api from '@/api/axious';

export const getAllTracks = () => api.get(API_ENDPOINTS.GET_ALL_TRACKS);
