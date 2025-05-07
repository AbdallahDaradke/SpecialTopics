import { Link, Routes } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React from "react";

function Footer() {
  return (
    <>
      {/* <Link to="/"> Home </Link>
    <Link to="/movies"> Movies </Link> */}

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="nav-container">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto nav-links">
              <p className="text-white">
                © 2025 Movie Show by Abdallah Daradkeh. All rights reserved
              </p>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
