import { store } from '../store/store.ts';
import { UserTableRoadType } from '../types/components-props-types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UsersDataState = {
  usersData: {
    users: UserTableRoadType[];
    total: number;
    skip: number;
    limit: number;
  };
  isLoading: boolean;
  hasError: boolean;
};
