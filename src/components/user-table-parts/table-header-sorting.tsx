import { setActiveSorting } from '../../store/users-data/users-data';
import { SortingTypes } from '../../const';
import { useAppDispatch } from '../../hooks';
export default function TableHeader(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSortClick = (sortType: SortingTypes) => {
    dispatch(setActiveSorting(sortType));
  };

  return (
    <tr>
      <th data-sort="lastName">
        <div
          className="header-cell"
          onClick={() => handleSortClick(SortingTypes.LastName)}
        >
          Фамилия <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="firstName">
        <div
          className="header-cell"
          onClick={() => handleSortClick(SortingTypes.FirstName)}
        >
          Имя <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="maidenName">
        <div
          className="header-cell"
          onClick={() => handleSortClick(SortingTypes.MaidenName)}
        >
          Отчество <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="age">
        <div
          className="header-cell"
          onClick={() => handleSortClick(SortingTypes.Age)}
        >
          Возраст <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="gender">
        <div className="header-cell">
          Пол <span className="sort-icon"></span>
        </div>
      </th>
      <th data-sort="phone">
        <div className="header-cell">
          Телефон <span className="sort-icon"></span>
        </div>
      </th>
      <th>Email</th>
      <th>Страна</th>
      <th>Город</th>
    </tr>
  );
}
