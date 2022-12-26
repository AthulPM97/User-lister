import InputForm from "./components/Users/InputForm";
import UserList from "./components/UserList";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const saveUserDataHandler = (savedUserData) => {
    setUserList((prevUserLIst) => {
      return [...prevUserLIst, savedUserData];
    });
  };

  return (
    <div>
      <InputForm onSaveUserData={saveUserDataHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
