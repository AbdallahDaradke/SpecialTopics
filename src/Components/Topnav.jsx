import "../pages/Topnav.css";
import React from "react";
import { Link, Routes } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

function Topnav() {
  return (
    <>
      {/* <Link to="/"> Home </Link>
      <Link to="/movies"> Movies </Link> */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="nav-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto nav-links">
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/movies" className="text-white">
                Movies
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    // <div>
    //   <Link to="/"> Home </Link>
    //   <Link to="/movies"> Movies </Link>
    //   {/* <Link to="/moviesdetails"> Details </Link> */}
    // </div>
  );
}

export default Topnav;
