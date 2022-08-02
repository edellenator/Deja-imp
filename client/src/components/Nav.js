import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  const { currentPage, setCurrentPage } = props;

  // temp test data, update to use Auth
  const loggedIn = false;

  return (
    <nav className="flex-row">
      {loggedIn && (
        <>
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
        </>
      )}

      <Link
        className={`ml-2 my-1 px-3 mx-5 py-2  ${
          currentPage === "Login" && "nav-active"
        }`}
        to="/login"
        onClick={() => setCurrentPage("Login")}
      >
        Register/Login
      </Link>
    </nav>
  );
};

export default Nav;
