import { GenderTypes } from '../../const';
import { UserTableRoadType } from '../../types/components-props-types';
export default function TableRoad({
  userData,
  onClick,
}: {
  userData: UserTableRoadType;
  onClick: (user: UserTableRoadType) => void;
}): JSX.Element {
  return (
    <tr
      onClick={() => {
        onClick(userData);
      }}
    >
      <td>{userData.lastName}</td>
      <td>{userData.firstName}</td>
      <td>{userData.maidenName}</td>
      <td>{userData.age}</td>
      <td>{GenderTypes[userData.gender]}</td>
      <td>{userData.phone}</td>
      <td>{userData.email}</td>
      <td>{userData.address.country}</td>
      <td>{userData.address.city}</td>
    </tr>
  );
}
