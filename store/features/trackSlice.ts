import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Track } from '@/sharesTypes/sharesTypes';

type initialStateType = {
  currentTrack: Track | null;
};

const initialState: initialStateType = {
  currentTrack: null,
};

const trackSlice = createSlice({
  name: 'tracks',  
  initialState,  
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
    state.currentTrack = action.payload;    
    },  
  },
});

export const { setCurrentTrack } = trackSlice.actions;
export const trackSliceReducer = trackSlice.reducer;