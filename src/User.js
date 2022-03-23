import React from "react";

const User = ({ user, changeColor }) => {


const Degistir = (id,value) => {
    changeColor(id,value)
}

    
  return (
    <div style={{ background: user.color }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      Color:{" "}
      <input
        value={user.color}
        onChange={(e) => Degistir(user.id,e.target.value)}
      />
    </div>
  );
};

export default User;
