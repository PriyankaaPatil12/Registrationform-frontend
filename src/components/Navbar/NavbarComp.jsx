import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="/"> <h3 style={{color:"white"}}>Registration</h3></Navbar.Brand>
       
          <Nav className=" ms-auto ">
            <NavLink to="/list" className="nav-link mx-4">
            <h3 style={{color:"white"}}>List</h3>            </NavLink>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
