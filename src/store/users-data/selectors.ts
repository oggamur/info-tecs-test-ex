import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserTableRoadType } from '../../types/components-props-types';

export const getUsersData = (state: State): UserTableRoadType[] =>
  state[NameSpace.UsersData].usersData.users;

export const getIsLoading = (state: State): boolean =>
  state[NameSpace.UsersData].isLoading;

export const getHasError = (state: State): boolean =>
  state[NameSpace.UsersData].hasError;
