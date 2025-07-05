export const API_ENDPOINTS = {
  GET_ALL_TRACKS: '/catalog/track/all/',
  SIGN_IN: '/user/login/',
  SIGN_UP: '/user/signup/',
  GET_SELECTION_BY_ID: (id:  string | number) => `/catalog/selection/${id}/`,
  GET_TOKEN: '/user/token/',
  REFRESH_TOKEN: '/user/token/refresh/',

  // GET_FAVORITES: '/catalog/track/favorite/all/',
  // ADD_TO_FAVORITES: (id) => `/catalog/track/${id}/favorite/`,
  // REMOVE_FROM_FAVORITES: (id) => `/catalog/track/${id}/favorite/`,
  // CREATE_SELECTION: '/catalog/selection',
  // GET_ALL_SELECTIONS: '/catalog/selection/all',
  //  GET_SELECTION_BY_ID:  `/catalog/selection`

};
