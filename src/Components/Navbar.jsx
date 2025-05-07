import React from "react";
import { Link, Routes } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/movies"> Movies </Link>
      {/* <Link to="/moviesdetails"> Details </Link> */}
    </div>
  );
}

export default Navbar;
