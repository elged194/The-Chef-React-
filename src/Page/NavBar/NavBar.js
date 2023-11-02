import React, { Component } from "react";
import "./NavBar.css";
import { Navbar, Nav, Container, NavDropdown, Form } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" id="Navbar" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            YOUR <span>CHEF</span> <i class="fa-brands fa-pagelines"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" id="navbarScrollingDropdown">
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search "
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavBar;
