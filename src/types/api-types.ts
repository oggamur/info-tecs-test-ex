import { UserTableRoadType } from './components-props-types';

export type UsersDataFetchType = {
  users: UserTableRoadType[];
  total: number;
  skip: number;
  limit: number;
};
