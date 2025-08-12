import { UserTableRoadType } from '../types/components-props-types';

interface ModalProps {
  user: UserTableRoadType;
  onClose: () => void;
}

export default function ModalWindow({
  user,
  onClose,
}: ModalProps): JSX.Element {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <img
            src={user.image || 'https://via.placeholder.com/100'}
            alt="Аватар"
            className="user-avatar"
          />
          <div>
            <h2>
              {user.lastName} {user.firstName} {user.maidenName}
            </h2>
            <p>{user.age} лет</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="user-detail">
            <span>Телефон:</span>
            <span>{user.phone}</span>
          </div>
          <div className="user-detail">
            <span>Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="user-detail">
            <span>Адрес:</span>
            <span>
              {user.address.address}, {user.address.city},{' '}
              {user.address.country}
            </span>
          </div>
          {user.height && (
            <div className="user-detail">
              <span>Рост:</span>
              <span>{user.height} см</span>
            </div>
          )}
          {user.weight && (
            <div className="user-detail">
              <span>Вес:</span>
              <span>{user.weight} кг</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
