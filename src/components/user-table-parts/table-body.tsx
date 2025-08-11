export default function TableBody(): JSX.Element {
  return (
    <>
      <tr data-userid="1">
        <td>Иванов</td>
        <td>Иван</td>
        <td>Иванович</td>
        <td>28</td>
        <td>муж</td>
        <td>+7 (999) 123-45-67</td>
        <td>ivanov@example.com</td>
        <td>Россия</td>
        <td>Москва</td>
      </tr>
      <tr data-userid="2">
        <td>Петрова</td>
        <td>Мария</td>
        <td>Сергеевна</td>
        <td>32</td>
        <td>жен</td>
        <td>+7 (912) 345-67-89</td>
        <td>petrova@example.com</td>
        <td>Россия</td>
        <td>Санкт-Петербург</td>
      </tr>
    </>
  );
}
