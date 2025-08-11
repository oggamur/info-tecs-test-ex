export default function FilterInputs() {
  return (
    <div className="filters">
      <input type="text" placeholder="Фильтр по ФИО" className="filter-input" />
      <input type="number" placeholder="Возраст" className="filter-input" />
      <select className="filter-input">
        <option value="">Все</option>
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>
      <input type="text" placeholder="Телефон" className="filter-input" />
    </div>
  );
}
