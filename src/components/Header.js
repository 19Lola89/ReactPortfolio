import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

// Must be rendered across every page component of the site

// Must contain a Navbar

export class Header extends Component {
  render() {
    return (
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ borderRadius: "5px" }}
      >
        <Container>
          <Navbar.Brand href="#home">Lola Kasimova</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#projectgallery">Project Gallery</Nav.Link>
              <NavDropdown
                title="Ka nors gal idek"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <img
                src={`${process.env.PUBLIC_URL}/myavatar2.png`}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "20px",
                }}
                alt="Avatar"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
