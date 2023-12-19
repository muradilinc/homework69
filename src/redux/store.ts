import {configureStore} from '@reduxjs/toolkit';
import {searchShowsReducer} from '../store/searchShowsSlice';

export const store = configureStore({
  reducer: {
    shows: searchShowsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;