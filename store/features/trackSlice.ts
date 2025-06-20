import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '@/sharesTypes/sharesTypes';

type initialStateType = {
  currentTrack: Track | null;
  isPlay: boolean;
  playList: Track[];
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
  playList: [],
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
    },
    setNextTrack(state) {
      const currentIndex = getCurrentIndexSafe(state);

      if (currentIndex === null) return;

      const nextIndex = currentIndex + 1;

      if (nextIndex < state.playList.length) {
        state.currentTrack = state.playList[nextIndex];
        state.isPlay = true;
      }
    },
    setPreviousTrack(state) {
      const currentIndex = getCurrentIndexSafe(state);
      if (currentIndex === null) return;

      const previousIndex = currentIndex - 1;
      if (previousIndex >= 0) {
        state.currentTrack = state.playList[previousIndex];
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
} = trackSlice.actions;

export const trackSliceReducer = trackSlice.reducer;
