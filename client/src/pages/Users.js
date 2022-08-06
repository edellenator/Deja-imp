import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  // temporary test data
  const me = {
    username: "USERNAME",
    email: "user@email.com",
  };

  return (
    <div className="container">
      <div className="my-5">
        <h3>{me.username}</h3>
        <h4>{me.email}</h4>
      </div>
      <UserList />
    </div>
  );
};

export default Users;
