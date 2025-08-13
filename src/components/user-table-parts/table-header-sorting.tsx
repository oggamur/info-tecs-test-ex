import { setActiveSorting } from '../../store/users-data/users-data';
import { SortingTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getActiveSorting } from '../../store/users-data/selectors';
export default function TableHeader(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector(getActiveSorting);

  const handleSortClick = (sortType: SortingTypes) => {
    if (sortType === activeSorting) {
      switch (activeSorting) {
        case SortingTypes.LastNameZA:
          return dispatch(setActiveSorting(SortingTypes.LastNameAZ));
        case SortingTypes.LastNameAZ:
          return dispatch(setActiveSorting(SortingTypes.LastNameZA));
        case SortingTypes.FirstNameZA:
          return dispatch(setActiveSorting(SortingTypes.FirstNameAZ));
        case SortingTypes.FirstNameAZ:
          return dispatch(setActiveSorting(SortingTypes.FirstNameZA));
        case SortingTypes.MaidenNameAZ:
          return dispatch(setActiveSorting(SortingTypes.MaidenNameZA));
        case SortingTypes.MaidenNameZA:
          return dispatch(setActiveSorting(SortingTypes.MaidenNameAZ));
        case SortingTypes.AgeFromHighToLow:
          return dispatch(setActiveSorting(SortingTypes.AgeFromLowToHigh));
        case SortingTypes.AgeFromLowToHigh:
          return dispatch(setActiveSorting(SortingTypes.AgeFromHighToLow));
      }
    }

    dispatch(setActiveSorting(sortType));
  };

  return (
    <tr>
      <th data-sort="lastName">
        <div
          className="header-cell"
          onClick={() => handleSortClick(SortingTypes.LastNameAZ)}
        >
          Фамилия <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="firstName">
        <div
          className="header-cell"
          onClick={() => handleSortClick(SortingTypes.FirstNameAZ)}
        >
          Имя <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="maidenName">
        <div
          className="header-cell"
          onClick={() => handleSortClick(SortingTypes.MaidenNameAZ)}
        >
          Отчество <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="age">
        <div
          className="header-cell"
          onClick={() => handleSortClick(SortingTypes.AgeFromLowToHigh)}
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
