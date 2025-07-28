import axios from 'axios';

const API_URL = 'https://webdev-music-003b5b991590.herokuapp.com';

const api = axios.create({
  baseURL: API_URL,
});

export default api;
