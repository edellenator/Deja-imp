import React from "react";
// import LoginForm from "./LoginForm";

const Home = ({ showModal }) => {
  return (
    <div className="container w-50 text-center py-custom">
      {/* <div className="modal">
        <LoginForm />
      </div> */}
      <h3>Welcome to [Custom Enterprise Name] Inventory System.</h3>
      {/* {!Auth.loggedIn && ( */}
      <p>Login to view [Custom Enterprise Name] inventory.</p>
      {/* )} */}
    </div>
  );
};

export default Home;
