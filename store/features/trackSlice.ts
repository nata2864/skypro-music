import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '@/sharesTypes/sharesTypes';
import { shuffleArray } from '@/utils/random';

type initialStateType = {
  currentTrack: Track | null;
  favoritePlayList: Track[];
  isPlay: boolean;
  isShuffle: boolean;
  playList: Track[];
  shuffledPlayList: Track[];
  isLoading: boolean;
  selectedAuthors: string[];
  selectedGenres: string[];
  sortOption: string;
  searchInput: string;
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
  isShuffle: false,
  playList: [],
  favoritePlayList: [],
  shuffledPlayList: [],
  isLoading: true,
  selectedAuthors: [],
  selectedGenres: [],
  sortOption: 'По умолчанию',
  searchInput: '',
};

function getActivePlayList(state: initialStateType): Track[] {
  return state.isShuffle ? state.shuffledPlayList : state.playList;
}

function getCurrentIndexSafe(state: initialStateType): number | null {
  if (!state.currentTrack || state.playList.length === 0) {
    return null;
  }

  const playList = getActivePlayList(state);

  const index = playList.findIndex(
    (track) => track._id === state.currentTrack!._id,
  );

  return index !== -1 ? index : null;
}

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setIsPlay: (state, action: PayloadAction<boolean>) => {
      state.isPlay = action.payload;
    },
    setCurrentPlayList: (state, action: PayloadAction<Track[]>) => {
      state.playList = action.payload;
      state.shuffledPlayList = shuffleArray(action.payload);
    },
    toggleShuffle(state) {
      state.isShuffle = !state.isShuffle;
      if (state.isShuffle) {
        state.shuffledPlayList = shuffleArray(state.playList);
      }
    },

    setNextTrack(state) {
      const currentIndex = getCurrentIndexSafe(state);
      const playList = getActivePlayList(state);
      if (currentIndex === null) return;

      let nextIndex;

      if (state.isShuffle) {
        nextIndex = (currentIndex + 1) % playList.length;
      } else {
        if (currentIndex >= playList.length - 1) {
          return;
        }
        nextIndex = currentIndex + 1;
      }

      state.currentTrack = playList[nextIndex];
      state.isPlay = true;
    },

    setPreviousTrack(state) {
      const currentIndex = getCurrentIndexSafe(state);
      const playList = getActivePlayList(state);
      if (currentIndex === null) return;

      let previousIndex;

      if (state.isShuffle) {
        previousIndex = (currentIndex - 1 + playList.length) % playList.length;
      } else {
        if (currentIndex <= 0) {
          return;
        }
        previousIndex = currentIndex - 1;
      }

      state.currentTrack = playList[previousIndex];
      state.isPlay = true;
    },
    setFavoritePlayList(state, action: PayloadAction<Track[]>) {
      state.favoritePlayList = action.payload;
    },
    addLikedTracks(state, action: PayloadAction<Track>) {
      state.favoritePlayList = [...state.favoritePlayList, action.payload];
    },
    removeLikedTracks(state, action: PayloadAction<Track>) {
      state.favoritePlayList = state.favoritePlayList.filter(
        (track) => track._id !== action.payload._id,
      );
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    toggleAuthor: (state, action: PayloadAction<string>) => {
      const author = action.payload;
      state.selectedAuthors = state.selectedAuthors.includes(author)
        ? state.selectedAuthors.filter((a) => a !== author)
        : [...state.selectedAuthors, author];
    },
    toggleGenre: (state, action: PayloadAction<string>) => {
      const genre = action.payload;
      state.selectedGenres = state.selectedGenres.includes(genre)
        ? state.selectedGenres.filter((g) => g !== genre)
        : [...state.selectedGenres, genre];
    },
    setSortOption: (state, action: PayloadAction<string>) => {
      state.sortOption = action.payload;
    },
    resetFilters(state) {
      state.selectedAuthors = [];
      state.selectedGenres = [];
      state.sortOption = 'По умолчанию';
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlay,
  setCurrentPlayList,
  setNextTrack,
  setPreviousTrack,
  toggleShuffle,
  addLikedTracks,
  removeLikedTracks,
  setFavoritePlayList,
  setIsLoading,
  toggleAuthor,
  toggleGenre,
  setSortOption,
  resetFilters,
  setSearchInput,
} = trackSlice.actions;

export const trackSliceReducer = trackSlice.reducer;
