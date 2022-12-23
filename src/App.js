import InputForm from "./components/Users/InputForm";
import UserList from "./components/UserList";


function App(props) {
  const saveUserDataHandler = (savedUserData) => {
    const userData = {
      ...savedUserData
    };
    console.log(userData);
  };

  return (
    <div>
      <InputForm onSaveUserData={saveUserDataHandler}/>
      <UserList users={[]}/>
    </div>
  );
}

export default App;
