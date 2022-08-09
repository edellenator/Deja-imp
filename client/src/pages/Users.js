import React from "react";
import UserList from "../components/UserList";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const Users = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const me = data?.me || [];

  if (loading) {
    return <h4 className="text-center">LOADING...</h4>;
  }

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
