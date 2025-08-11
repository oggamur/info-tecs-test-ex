import { useAppSelector } from '../hooks';
import { getUsersData } from '../store/users-data/selectors';

import TableHeader from './user-table-parts/table-header';
import TableRoad from './user-table-parts/table-road';

export default function UserTable(): JSX.Element {
  const usersData = useAppSelector(getUsersData);
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {usersData.map((userData) => (
            <TableRoad key={userData.id} userData={userData} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
