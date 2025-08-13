import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { UsersDataState } from '../../types/state';
import { fetchUsersAction } from '../api-actions';
import { UserTableRoadType } from '../../types/components-props-types';
import { SortingTypes } from '../../const';
const initialState: UsersDataState = {
  usersData: {
    users: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  activeFilters: {
    fullName: null,
    age: null,
    gender: null,
    phone: null,
  },
  selectedUserId: null,
  activeSorting: null,
  quantityOfUsers: 0,
  activePage: 1,
  isLoading: false,
  hasError: false,
};

export const UsersData = createSlice({
  name: NameSpace.UsersData,
  initialState,
  reducers: {
    setAgeFilter: (state, action: { payload: number }) => {
      state.activeFilters.age = action.payload;
    },
    setSelectedUserId: (state, action: { payload: number | null }) => {
      state.selectedUserId = action.payload;
    },
    setQuantityOfUsers: (state, action: { payload: number }) => {
      state.quantityOfUsers = action.payload;
    },
    setFullNameFilter: (state, action: { payload: string }) => {
      state.activeFilters.fullName = action.payload;
    },
    setGenderFilter: (state, action: { payload: string }) => {
      state.activeFilters.gender = action.payload;
    },
    setPhoneFilter: (state, action: { payload: string }) => {
      state.activeFilters.phone = action.payload;
    },
    setActivePage: (state, action: { payload: number }) => {
      state.activePage = action.payload;
    },
    setActiveSorting: (state, action: { payload: SortingTypes | null }) => {
      state.activeSorting = action.payload;
    },
    resetFiltersAndSorting: (state) => {
      state.activeFilters = {
        fullName: null,
        age: null,
        gender: null,
        phone: null,
      };
      state.activeSorting = null;
    },
  },
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

export const {
  setAgeFilter,
  setFullNameFilter,
  setGenderFilter,
  setPhoneFilter,
  setActivePage,
  setQuantityOfUsers,
  setActiveSorting,
  setSelectedUserId,
  resetFiltersAndSorting,
} = UsersData.actions;
