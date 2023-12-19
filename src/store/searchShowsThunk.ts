import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../http/axiosApi';
import {Show, ShowResponse} from '../types';

export const fetchShows = createAsyncThunk<Show[], string>(
  'show/fetchShow',
  async (name) => {
    const response = await axiosApi.get<ShowResponse[]>(`?q=${name}`);

    if (response.data.length !== 0) {
      return response.data.map((item) => item.show);
    }

    return [];
  }
);