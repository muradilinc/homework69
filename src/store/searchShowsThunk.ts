import {createAsyncThunk} from '@reduxjs/toolkit';
import {Show, ShowResponse} from '../types';
import dynamicAxios from '../http/axiosApi';
import {MAIN_URL, SINGLE_ITEM_URL} from '../constansts/contansts';

export const fetchShows = createAsyncThunk<Show[], string>(
  'show/fetchShows',
  async (name) => {
    const response = await dynamicAxios(MAIN_URL).get<ShowResponse[]>(`?q=${name}`);

    if (response.data.length !== 0) {
      return response.data.map((item) => item.show);
    }

    return [];
  }
);

export const fetchSingleShow = createAsyncThunk<Show, number>(
  'show/fetchSingleShow',
  async (id) => {
    const response = await dynamicAxios(SINGLE_ITEM_URL).get(`/${id}`);
    return response.data;
  }
);