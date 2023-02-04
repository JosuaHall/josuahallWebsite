import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Navigation = () => (
  <Navbar
    fixed="top"
    collapseOnSelect
    expand="lg"
    className="navi"
    variant="dark"
  >
    <Navbar.Brand>
      <Nav.Link as="div" style={{ cursor: "pointer" }}>
        <Link activeClass="active" offset={-64} smooth spy to="header">
          J H
        </Link>
      </Nav.Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link as="div" style={{ cursor: "pointer" }}>
          <Link activeClass="active" offset={-64} smooth spy to="about">
            About Me
          </Link>
        </Nav.Link>
        <Nav.Link as="div" style={{ cursor: "pointer" }}>
          <Link activeClass="active" offset={-64} smooth spy to="background">
            Background
          </Link>
        </Nav.Link>
        <Nav.Link as="div" style={{ cursor: "pointer" }}>
          <Link activeClass="active" offset={-64} smooth spy to="education">
            Education
          </Link>
        </Nav.Link>
        <Nav.Link as="div" style={{ cursor: "pointer" }}>
          <Link activeClass="active" offset={-64} smooth spy to="skills">
            Skills
          </Link>
        </Nav.Link>
        <Nav.Link as="div" style={{ cursor: "pointer" }}>
          <Link activeClass="active" offset={-64} smooth spy to="projects">
            Projects
          </Link>
        </Nav.Link>
        <Nav.Link as="div" style={{ cursor: "pointer" }}>
          <Link activeClass="active" offset={-64} smooth spy to="socialmedia">
            Social
          </Link>
        </Nav.Link>
        <Nav.Link as="div" style={{ cursor: "pointer" }}>
          <Link activeClass="active" offset={-64} smooth spy to="impressum">
            Impressum
          </Link>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
