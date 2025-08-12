import { NameSpace, SortingTypes } from '../../const';
import { State } from '../../types/state';
import { UserTableRoadType } from '../../types/components-props-types';

export const getUsersData = (state: State): UserTableRoadType[] =>
  state[NameSpace.UsersData].usersData.users;

export const getIsLoading = (state: State): boolean =>
  state[NameSpace.UsersData].isLoading;

export const getHasError = (state: State): boolean =>
  state[NameSpace.UsersData].hasError;

export const getActiveFilters = (
  state: State
): {
  fullName: string | null;
  age: number | null;
  gender: string | null;
  phone: string | null;
} => state[NameSpace.UsersData].activeFilters;

export const getActivePage = (state: State): number =>
  state[NameSpace.UsersData].activePage;

export const getQuantityOfUsers = (state: State): number =>
  state[NameSpace.UsersData].quantityOfUsers;

export const getActiveSorting = (state: State): SortingTypes | null =>
  state[NameSpace.UsersData].activeSorting;
export const getSelectedUserId = (state: State): number | null =>
  state[NameSpace.UsersData].selectedUserId;
