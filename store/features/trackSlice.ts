import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '@/sharesTypes/sharesTypes';

type initialStateType = {
  currentTrack: Track | null;
  isPlay: boolean;
playList:Track[]
};

const initialState: initialStateType = {
  currentTrack: null,
  isPlay: false,
playList:[]
};

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
     setCurrentPlayList: (state,action: PayloadAction<Track[]>) => {
      state.playList = action.payload;
    },
  
  },
});

export const { setCurrentTrack, setIsPlay,setCurrentPlayList } = trackSlice.actions;

export const trackSliceReducer = trackSlice.reducer;
