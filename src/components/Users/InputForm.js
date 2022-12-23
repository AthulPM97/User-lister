import "./InputForm.css";
import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const InputForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredUserName: "",
    enteredAge: "",
  });

  const userNameChangeHandler = (e) => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredUserName: e.target.value,
      };
    });
  };

  const ageChangeHandler = (e) => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredAge: e.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(userInput.enteredUserName.trim().length === 0 || userInput.enteredAge.trim().length === 0) {
      return;
    }
    if(+userInput.enteredAge < 1) {
      return;
    }
    const inputData = {
      name: userInput.enteredUserName,
      age: userInput.enteredAge,
    };
    props.onSaveUserData(inputData);
    setUserInput(() => {
      return { enteredUserName: "", enteredAge: "" };
    });
  };

  return (
    <Card>
      <div className="input">
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input
            type="text"
            value={userInput.enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label type="number">Age (years)</label>
          <input
            type="number"
            value={userInput.enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </Card>
  );
};

export default InputForm;
