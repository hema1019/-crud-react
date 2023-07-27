import "./styles/UserCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUserById("/users", user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpenForm();
  };

  return (
    <article className="usercard">
      <h2 className="usercard__name">{`${user.first_name} ${user.last_name}`}</h2>
      <hr className="usercard__hr1" />
      <ul className="usercard__list">
        <li className="usercard__info">
          <span className="usercard__titles">EMAIL</span>
          <br />
          <span className="usercard__emailInfo">{user.email}</span>
        </li>
        <li className="usercard__info">
          <span className="usercard__titles">BIRTHDAY</span>
          <br />
          <span className="usercard__birthdayInfo">
            <i className="bx bx-gift"></i>
            {user.birthday}
          </span>
        </li>
      </ul>
      <hr className="usercard__hr2" />
      <footer className="usercard__icons">
        <button className="usercard__button-trash" onClick={handleDelete}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="usercard__button-pencil" onClick={handleUpdate}>
          <i className="bx bx-pencil"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
