import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Pinterest_logo from "../assets/Pinterest-logo.png";
import Messages from "../assets/message.png";
import Notification from "../assets/notfication.png";
import Form from "react-bootstrap/Form";
import Profile from "../assets/profile.png";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar style={{ display: "flex" }}>
      <Container style={{ margin: "0" }}>
        <Navbar.Brand href="#pinterest_logo">
          <img
            alt=""
            src={Pinterest_logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/Today"} className="nav-link">
                Today
              </Link>
            </Nav.Link>
            <NavDropdown
              title="Create"
              borderRadius="20px"
              id="basic-nav-dropdown"
              style={{ marginTop: "8px" }}
            >
              <NavDropdown.Item>
                <Link to={"/IdeaPin"} className="nav-link">
                  Create Idea Pin
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/CreatePin"} className="nav-link">
                  Create Pin
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Form
              className="d-flex"
              style={{ width: "1000px", height: "44px" }}
            >
              <Form.Control
                style={{
                  borderRadius: "20px",
                  marginTop: "5.3px",
                  backgroundColor: "#e9e9e9",
                }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
        <div style={{ display: "flex", float: "inline-end" }}>
          <Navbar.Brand href="#notfication_logo">
            <img
              alt=""
              src={Notification}
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Brand href="#messages_logo">
            <img
              alt=""
              src={Messages}
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Brand href="#profile_logo">
            <img
              alt=""
              src={Profile}
              width="24"
              height="24"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>

          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "black",
              }}
              size="sm"
            ></Dropdown.Toggle>
            <Dropdown.Menu align="end" style={{ borderRadius: "15px" }}>
              <Dropdown.Item>Account</Dropdown.Item>
              <Dropdown.Item>Add Account</Dropdown.Item>
              <Dropdown.Item>Convert to Business</Dropdown.Item>
              <Dropdown.Item>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to={"/Settings"}
                >
                  Settings
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>Tune your home feed</Dropdown.Item>
              <Dropdown.Item>Install the windows app</Dropdown.Item>
              <Dropdown.Item>Your privacy rights</Dropdown.Item>
              <Dropdown.Item>Get Help</Dropdown.Item>
              <Dropdown.Item>See Terms of Service</Dropdown.Item>
              <Dropdown.Item>See Privacy Policy</Dropdown.Item>
              <Dropdown.Item>Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}
export default Navigation;
