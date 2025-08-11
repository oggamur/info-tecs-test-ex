import { UserTableRoadType } from '../../types/components-props-types';
import { GenderTypes } from '../../const';

export default function TableRoad({
  userData,
}: {
  userData: UserTableRoadType;
}): JSX.Element {
  const gender = userData.gender;
  return (
    <tr data-userid="1">
      <td>{userData.lastName}</td>
      <td>{userData.firstName}</td>
      <td>{userData.maidenName}</td>
      <td>{userData.age}</td>
      <td>{GenderTypes[gender]}</td>
      <td>{userData.phone}</td>
      <td>{userData.email}</td>
      <td>{userData.address.country}</td>
      <td>{userData.address.city}</td>
    </tr>
  );
}
