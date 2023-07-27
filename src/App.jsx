import { useEffect, useState } from "react";
import "./App.css";
import "./components/styles/HeaderApp.css";
import useFetch from "./hooks/useFetch";
import UserCard from "./components/UserCard";
import FormUser from "./components/FormUser";


function App() {
  const [updateInfo, setUpdateInfo] = useState();

  const [closeForm, setCloseForm] = useState(true);

  const baseUlr = "https://users-crud.academlo.tech";

  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] =
    useFetch(baseUlr, setCloseForm);

  useEffect(() => {
    getAllUsers("/users");
  }, []);

  const handleOpenForm = () => {
    setCloseForm(false);
  };

  return (
    <>
      <div className="container">
        <header className="headerapp">
          <h1 className="header__title">Users</h1>
          <button onClick={handleOpenForm} className="header__btn">
            + Create new user
          </button>
        </header>
      </div>


      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className="usercard-container">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
          />
        ))}
      </div>
    </>
  );
}

export default App;
