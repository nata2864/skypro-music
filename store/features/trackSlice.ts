import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '@/sharesTypes/sharesTypes';
import {shuffleArray} from '@/utils/random';
import PlayList from '@/components/PlayList/Playlist';

type initialStateType = {
  currentTrack: Track | null;
  isPlay: boolean;
  isShuffle: boolean;
  playList: Track[];
  shuffledPlayList: Track[];
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
  isShuffle: false,
  playList: [],
  shuffledPlayList: [],
};

function getCurrentIndexSafe(state: initialStateType): number | null {
  if (!state.currentTrack || state.playList.length === 0) {
    return null;
  }

  const index = state.playList.findIndex(
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
    },
    setNextTrack(state) {
      const currentIndex = getCurrentIndexSafe(state);
      const playList = state.isShuffle?state.shuffledPlayList:state.playList;

      if (currentIndex === null) return;

      const nextIndex = currentIndex + 1;

      if (nextIndex < playList.length) {
        state.currentTrack = playList[nextIndex];
        state.isPlay = true;
      }
    },
    setPreviousTrack(state) {
      const currentIndex = getCurrentIndexSafe(state);
       const playList = state.isShuffle?state.shuffledPlayList:state.playList;
      if (currentIndex === null) return;

      const previousIndex = currentIndex - 1;
      if (previousIndex >= 0) {
        state.currentTrack = playList[previousIndex];
        state.isPlay = true;
      }
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
} = trackSlice.actions;

export const trackSliceReducer = trackSlice.reducer;
