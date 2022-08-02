import React from "react";

const Users = () => {
  // temporary data
  const me = {
    username: "USERNAME",
    email: "user@email.com",
  };

  const users = [
    {
      id: 1,
      username: "user1",
      email: "user1@email.com",
    },
    {
      id: 2,
      username: "user2",
      email: "user2@email.com",
    },
    {
      id: 3,
      username: "user3",
      email: "user3@email.com",
    },
    {
      id: 4,
      username: "user4",
      email: "user4@email.com",
    },
    {
      id: 5,
      username: "user5",
      email: "user5@email.com",
    },
    {
      id: 6,
      username: "user6",
      email: "user6@email.com",
    },
  ];

  return (
    <div className="container">
      <div className="my-5">
        <h3>{me.username}</h3>
        <h4>{me.email}</h4>
      </div>
      <div className="container my-5">
        <h5>Other Users:</h5>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
