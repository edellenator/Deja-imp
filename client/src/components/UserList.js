import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

const UserList = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  if (loading) {
    return <h4 className="text-center">LOADING...</h4>;
  }

  return (
    <table className="table m-5">
      <thead>
        <tr className="text-center">
          <th className="m-5" scope="col">
            <h3>Other Users</h3>
          </th>
          <th className="m-5" scope="col">
            <h3>Emails</h3>
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
