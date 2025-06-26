import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '@/sharesTypes/sharesTypes';
import { shuffleArray } from '@/utils/random';

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
