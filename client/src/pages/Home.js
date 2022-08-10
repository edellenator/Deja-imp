import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Home = ({ showModal }) => {
  const loggedIn = Auth.loggedIn();

  return (
    <div className="container w-50 text-center py-custom">
      <h3>Welcome to [Custom Enterprise Name] Inventory System.</h3>
      {!loggedIn && (
        <p>
          <Link to="/login" className="text-primary">
            Login
          </Link>{" "}
          to view [Custom Enterprise Name] inventory.
        </p>
      )}
    </div>
  );
};

export default Home;
