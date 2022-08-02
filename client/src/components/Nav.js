import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  // setShowModal prop needs to come from app.js (used to render on homepage)
  const { currentPage, setCurrentPage } = props;

  return (
    <nav className="flex-row">
      {/* {Auth.loggedIn ? ( */}
      {/* <> */}
      <Link
        className={`ml-2 my-1 px-3 mx-5 py-2  ${
          currentPage === "Users" && "nav-active"
        }`}
        data-testid="settings"
        onClick={() => setCurrentPage("Users")}
        to="/users"
      >
        Users
      </Link>
      <Link
        className={`ml-2 my-1 px-3 mx-5 py-2  ${
          currentPage === "Vendors" && "nav-active"
        }`}
        data-testid="vendors"
        onClick={() => setCurrentPage("Vendors")}
        to="/vendors"
      >
        Vendors
      </Link>
      <Link
        className={`ml-2 my-1 px-3 mx-5 py-2  ${
          currentPage === "Products" && "nav-active"
        }`}
        data-testid="products"
        onClick={() => setCurrentPage("Products")}
        to="/products"
      >
        Products
      </Link>

      <Link
        className={`ml-2 my-1 px-3 mx-5 py-2  ${
          currentPage === "Login" && "nav-active"
        }`}
        to="/login"
        onClick={() => setCurrentPage("Login")}
      >
        Register/Login
      </Link>
      {/* </> */}
      {/* ) : (
        <Link
          className="ml-2 my-1 px-2 mx-5 py-1 "
          onClick={() => setShowModal(true)}
        >
          Register/Login
        </Link>
      )} */}
    </nav>
  );
};

export default Nav;
