import { useAppSelector, useAppDispatch } from '../hooks';
import {
  getUsersData,
  getActiveFilters,
  getActivePage,
  getActiveSorting,
  getSelectedUserId,
} from '../store/users-data/selectors';
import { SortingTypes } from '../const';
import TableHeader from './user-table-parts/table-header-sorting';
import TableRoad from './user-table-parts/table-road';
import { useEffect, useMemo } from 'react';
import {
  setQuantityOfUsers,
  setSelectedUserId,
  setActivePage,
} from '../store/users-data/users-data';
import { UserTableRoadType } from '../types/components-props-types';
import ModalWindow from './modal-window';

export default function UserTable(): JSX.Element {
  const dispatch = useAppDispatch();
  const { fullName, age, gender, phone } = useAppSelector(getActiveFilters);
  const usersData = useAppSelector(getUsersData);
  const activePage = useAppSelector(getActivePage);
  const activeSorting = useAppSelector(getActiveSorting);
  const selectedUserId = useAppSelector(getSelectedUserId);

  const { filteredSortedUsers, paginatedUsers } = useMemo(() => {
    const filteredUsers = usersData.filter((user) => {
      if (
        fullName &&
        !user.firstName.toLowerCase().includes(fullName.toLowerCase()) &&
        !user.lastName.toLowerCase().includes(fullName.toLowerCase()) &&
        !user.maidenName.toLowerCase().includes(fullName.toLowerCase())
      ) {
        return false;
      }
      if (age && user.age !== age) {
        return false;
      }
      if (gender && user.gender !== gender) {
        return false;
      }
      if (phone && !user.phone.includes(phone)) {
        return false;
      }
      return true;
    });

    const sortedUsers = [...filteredUsers].sort((a, b) => {
      if (activeSorting === SortingTypes.LastNameAZ) {
        return a.lastName.localeCompare(b.lastName);
      }
      if (activeSorting === SortingTypes.LastNameZA) {
        return b.lastName.localeCompare(a.lastName);
      }
      if (activeSorting === SortingTypes.FirstNameZA) {
        return b.firstName.localeCompare(a.firstName);
      }
      if (activeSorting === SortingTypes.FirstNameAZ) {
        return a.firstName.localeCompare(b.firstName);
      }
      if (activeSorting === SortingTypes.MaidenNameZA) {
        return b.maidenName.localeCompare(a.maidenName);
      }
      if (activeSorting === SortingTypes.MaidenNameAZ) {
        return a.maidenName.localeCompare(b.maidenName);
      }
      if (activeSorting === SortingTypes.AgeFromLowToHigh) {
        return a.age - b.age;
      }
      if (activeSorting === SortingTypes.AgeFromHighToLow) {
        return b.age - a.age;
      }
      if (activeSorting === null) {
        return 0;
      }
      return 0;
    });

    const startIndex = (activePage - 1) * 10;
    const endIndex = activePage * 10;
    const paginated = sortedUsers.slice(startIndex, endIndex);

    return {
      filteredSortedUsers: sortedUsers,
      paginatedUsers: paginated,
    };
  }, [usersData, fullName, age, gender, phone, activeSorting, activePage]);

  const selectedUserData = usersData.find((user) => user.id === selectedUserId);

  const handleRowClick = (user: UserTableRoadType) => {
    dispatch(setSelectedUserId(user.id));
  };

  useEffect(() => {
    dispatch(setQuantityOfUsers(filteredSortedUsers.length));
    window.scrollTo(0, 0);

    const maxPage = Math.ceil(filteredSortedUsers.length / 10);
    if (activePage > maxPage && maxPage > 0) {
      dispatch(setActivePage(maxPage));
    }
  }, [activePage, dispatch, filteredSortedUsers.length]);

  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {paginatedUsers.map((userData) => (
            <TableRoad
              key={userData.id}
              userData={userData}
              onClick={handleRowClick}
            />
          ))}
        </tbody>
      </table>

      {selectedUserData && (
        <ModalWindow
          user={selectedUserData}
          onClose={() => dispatch(setSelectedUserId(null))}
        />
      )}
    </div>
  );
}
