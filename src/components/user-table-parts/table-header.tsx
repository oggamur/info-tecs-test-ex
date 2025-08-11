export default function TableHeader(): JSX.Element {
  return (
    <tr>
      <th data-sort="lastName">
        <div className="header-cell">
          Фамилия <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="firstName">
        <div className="header-cell">
          Имя <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="maidenName">
        <div className="header-cell">
          Отчество <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="age">
        <div className="header-cell">
          Возраст <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="gender">
        <div className="header-cell">
          Пол <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th data-sort="phone">
        <div className="header-cell">
          Телефон <span className="sort-icon">↕️</span>
        </div>
      </th>
      <th>Email</th>
      <th>Страна</th>
      <th>Город</th>
    </tr>
  );
}
