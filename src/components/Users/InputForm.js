import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./InputForm.module.css";
import React from "react";

const InputForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredUserName: "",
    enteredAge: "",
  });

  const [error, setError] = useState();

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
    if (
      userInput.enteredUserName.trim().length === 0 ||
      userInput.enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age"
      });
      return;
    }
    if (+userInput.enteredAge < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age!"
      })
      return;
    }
    const inputData = {
      id: Math.random().toString(),
      name: userInput.enteredUserName,
      age: userInput.enteredAge,
    };
    props.onSaveUserData(inputData);
    setUserInput(() => {
      return { enteredUserName: "", enteredAge: "" };
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
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
      </Card>
    </React.Fragment>
  );
};

export default InputForm;
