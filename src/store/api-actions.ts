import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersDataFetchType } from '../types/api-types';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';
import { APIRoute } from '../const';

export const fetchUsersAction = createAsyncThunk<
  UsersDataFetchType,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('fetchUsers', async (_arg, { extra: api }) => {
  const { data } = await api.get<UsersDataFetchType>(APIRoute.USERS_DATA);
  return data;
});
