import {
  getActivePage,
  getQuantityOfUsers,
} from '../store/users-data/selectors';
import { useAppDispatch, useAppSelector } from '../hooks/index';
import { setActivePage } from '../store/users-data/users-data';

export default function PaginationButtonsScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const activePage = useAppSelector(getActivePage);
  const quantityOfPages = Math.round(useAppSelector(getQuantityOfUsers) / 10);

  const handlePageClick = (page: number) => {
    dispatch(setActivePage(page));
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={activePage === 1}
        onClick={() => {
          if (activePage > 1) {
            handlePageClick(activePage - 1);
          }
        }}
      >
        ←
      </button>
      {}
      {Array.from({ length: quantityOfPages }, (_, index) => (
        <button
          key={index}
          className={`pagination-button ${
            activePage === index + 1 ? 'active' : ''
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
