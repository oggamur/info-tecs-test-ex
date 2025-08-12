import { useAppDispatch } from '../hooks';
import {
  setAgeFilter,
  setGenderFilter,
  setFullNameFilter,
  setPhoneFilter,
} from '../store/users-data/users-data';
import { useRef, useEffect } from 'react';
import debounce from 'lodash.debounce';

export default function FilterInputs() {
  const dispatch = useAppDispatch();

  const debouncedFullNameFilter = useRef(
    debounce((value: string) => {
      dispatch(setFullNameFilter(value));
    }, 500)
  ).current;

  const debouncedPhoneFilter = useRef(
    debounce((value: string) => {
      dispatch(setPhoneFilter(value));
    }, 500)
  ).current;

  useEffect(
    () => () => {
      debouncedFullNameFilter.cancel();
      debouncedPhoneFilter.cancel();
    },
    [debouncedFullNameFilter, debouncedPhoneFilter]
  );

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFullNameFilter(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedPhoneFilter(e.target.value);
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Фильтр по ФИО"
        className="filter-input"
        onChange={handleFullNameChange}
      />
      <input
        type="number"
        placeholder="Возраст"
        className="filter-input"
        onChange={(e) => dispatch(setAgeFilter(Number(e.target.value)))}
      />
      <select
        className="filter-input"
        onChange={(e) => dispatch(setGenderFilter(e.target.value))}
      >
        <option value="">Все</option>
        <option value="male">Мужской</option>
        <option value="female">Женский</option>
      </select>
      <input
        type="text"
        placeholder="Телефон"
        className="filter-input"
        onChange={handlePhoneChange}
      />
    </div>
  );
}
