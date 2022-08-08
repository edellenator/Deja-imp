import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("");
  return (
    <header className="container flex-row justify-space-between align-center pt-3">
      <Link to="/" onClick={() => setCurrentPage("")}>
        <h1>DEJA IMp</h1>
      </Link>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </header>
  );
};

export default Header;
