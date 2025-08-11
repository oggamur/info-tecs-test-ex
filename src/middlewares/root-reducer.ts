import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { UsersData } from '../store/users-data/users-data';

export const rootReducer = combineReducers({
  [NameSpace.UsersData]: UsersData.reducer,
});
