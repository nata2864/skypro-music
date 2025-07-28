export const API_ENDPOINTS = {
  GET_ALL_TRACKS: '/catalog/track/all/',
  SIGN_IN: '/user/login/',
  SIGN_UP: '/user/signup/',
  GET_SELECTION_BY_ID: (id:  string | number) => `/catalog/selection/${id}/`,
  GET_TOKEN: '/user/token/',
  REFRESH_TOKEN: '/user/token/refresh/',
  ADD_TO_FAVORITES: (id:string | number) => `/catalog/track/${id}/favorite/`,
  REMOVE_FROM_FAVORITES: (id:string | number) => `/catalog/track/${id}/favorite/`,
  GET_FAVORITES: '/catalog/track/favorite/all/',
};


