import { store } from '../store/store.ts';
import { UserTableRoadType } from '../types/components-props-types';
import { SortingTypes } from '../const';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UsersDataState = {
  usersData: {
    users: UserTableRoadType[];
    total: number;
    skip: number;
    limit: number;
  };
  activeFilters: {
    fullName: string | null;
    age: number | null;
    gender: string | null;
    phone: string | null;
  };
  selectedUserId: number | null;
  activeSorting: SortingTypes | null;
  quantityOfUsers: number;
  activePage: number;
  isLoading: boolean;
  hasError: boolean;
};
