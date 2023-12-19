import {Show} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {fetchShows} from './searchShowsThunk';
import {RootState} from '../redux/store';

interface SearchShowsState {
  fetchLoading: boolean;
  shows: Show[];
  singleShow: Show | null;
}

const initialState: SearchShowsState = {
  fetchLoading: false,
  shows: [],
  singleShow: null,
};

export const searchShowsSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    selectShow: (state, {payload: id}) => {
      state.singleShow = state.shows.filter((item) => item.id === id)[0];
    },
    clearShows: (state) => {
      state.shows = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchShows.fulfilled, (state, {payload: shows}) => {
      state.fetchLoading = false;
      console.log(shows);
      state.shows = shows;
    });
    builder.addCase(fetchShows.rejected, (state) => {
      state.fetchLoading = false;
    });
  },
});

export const searchShowsReducer = searchShowsSlice.reducer;
export const {
  selectShow,
  clearShows,
} = searchShowsSlice.actions;

export const selectorShows = (state: RootState) => state.shows.shows;
export const selectorSingleShow = (state: RootState) => state.shows.singleShow;
export const selectorFetchLoading = (state: RootState) => state.shows.fetchLoading;