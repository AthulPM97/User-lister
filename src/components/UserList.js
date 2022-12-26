import Card from "./UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  console.log(props.users)
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} years old) College: {user.college}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
