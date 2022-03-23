import React from "react";
import User from "./User";

const UserList = ({ users, changeColor }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <User key={user.name} user={user} changeColor={changeColor}></User>
      ))}
    </div>
  );
};

export default UserList;
