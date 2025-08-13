import { useAppDispatch } from '../hooks';
import {
  setAgeFilter,
  setGenderFilter,
  setFullNameFilter,
  setPhoneFilter,
  resetFiltersAndSorting,
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

  const fullNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Фильтр по ФИО"
        className="filter-input"
        onChange={handleFullNameChange}
        ref={fullNameRef}
      />
      <input
        type="number"
        placeholder="Возраст"
        className="filter-input"
        onChange={(e) => dispatch(setAgeFilter(Number(e.target.value)))}
        ref={ageRef}
      />
      <select
        className="filter-input"
        onChange={(e) => dispatch(setGenderFilter(e.target.value))}
        ref={genderRef}
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
        ref={phoneRef}
      />

      <button
        className="reset-button"
        onClick={() => {
          dispatch(resetFiltersAndSorting());
          if (fullNameRef.current) {
            fullNameRef.current.value = '';
          }
          if (phoneRef.current) {
            phoneRef.current.value = '';
          }
          if (ageRef.current) {
            ageRef.current.value = '';
          }
          if (genderRef.current) {
            genderRef.current.value = '';
          }
        }}
      >
        Сбросить фильтры и сортировку
      </button>
    </div>
  );
}
