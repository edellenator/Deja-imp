import React from "react";

const UserList = () => {
  // temp test data
  const users = [
    {
      _id: 1,
      username: "user1",
      email: "user1@email.com",
    },
    {
      _id: 2,
      username: "user2",
      email: "user2@email.com",
    },
    {
      _id: 3,
      username: "user3",
      email: "user3@email.com",
    },
    {
      _id: 4,
      username: "user4",
      email: "user4@email.com",
    },
    {
      _id: 5,
      username: "user5",
      email: "user5@email.com",
    },
    {
      _id: 6,
      username: "user6",
      email: "user6@email.com",
    },
  ];

  return (
    <table className="table m-5">
      <thead>
        <tr className="text-center">
          <th className="m-5" scope="col">
            <h3>Other Users</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr className="text-center" key={user._id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
