import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { UsersDataState } from '../../types/state';
import { fetchUsersAction } from '../api-actions';
import { UserTableRoadType } from '../../types/components-props-types';
const initialState: UsersDataState = {
  usersData: {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  isLoading: false,
  hasError: false,
};

export const UsersData = createSlice({
  name: NameSpace.UsersData,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchUsersAction.fulfilled,
        (
          state,
          action: {
            payload: {
              users: UserTableRoadType[];
              total: number;
              skip: number;
              limit: number;
            };
          }
        ) => {
          state.usersData.users = action.payload.users;
          state.usersData.total = action.payload.total;
          state.usersData.skip = action.payload.skip;
          state.usersData.limit = action.payload.limit;
          state.isLoading = false;
        }
      )
      .addCase(fetchUsersAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});
