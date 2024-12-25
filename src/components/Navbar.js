import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const Navbars = () => {
  // State to control the navbar toggle (open or close)
  const [expanded, setExpanded] = useState(false);

  // Function to close the navbar when a menu item is clicked
  const handleLinkClick = () => setExpanded(false);

  return (
    <Navbar expanded={expanded} expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#" className="brand">
          Lalit Gangwar
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle the navbar on click
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav-item" onClick={handleLinkClick}>
              About
            </Nav.Link>
            <Nav.Link href="#education" className="nav-item" onClick={handleLinkClick}>
              Education
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-item" onClick={handleLinkClick}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-item" onClick={handleLinkClick}>
              Projects
            </Nav.Link>
            <Nav.Link href="#experience" className="nav-item" onClick={handleLinkClick}>
              Experience
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-item" onClick={handleLinkClick}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
