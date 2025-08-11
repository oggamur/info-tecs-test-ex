import { getIsLoading, getHasError } from '../store/users-data/selectors';
import FilterInputs from './filter-inputs';
import UserTable from './user-table';
import { useAppSelector } from '../hooks';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import NoResponseErrorScreen from '../pages/no-response-screen/no-response-screen';

export default function AppScreen() {
  const usersDataIsLoading = useAppSelector(getIsLoading);
  const usersDataHasError = useAppSelector(getHasError);
  if (usersDataIsLoading) {
    return <LoadingScreen size={60} color="#4481C3" />;
  }

  if (usersDataHasError) {
    return <NoResponseErrorScreen />;
  }

  return (
    <div className="app-container">
      <h1>Пользователи</h1>
      <FilterInputs />
      <UserTable />
    </div>
  );
}
