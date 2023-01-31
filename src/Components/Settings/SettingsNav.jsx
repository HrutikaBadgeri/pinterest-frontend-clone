import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function SettingsNav() {
  const style = {
    color: "black",
    fontSize: "13px",
    fontWeight: "bold",
    fontFamily: "Segoe UI",
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Nav
        style={{
          textAlign: "left",
          display: "block",
          position: "absolute",
          marginTop: "30px",
        }}
        className="flex-column"
      >
        <Nav.Link style={style}>
          <Link to="/Settings/PublicProfile">Public Profile</Link>
        </Nav.Link>

        <Nav.Link className="active" style={style}>
          <Link to="/Settings/PersonalInformation">Personal Information</Link>
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          Account Management
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          Tune your home feed
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          Claimed Accounts
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          Social Permissions
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          Notifications
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          Privacy and Data
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          Security and Logins
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          Branded Content
        </Nav.Link>
      </Nav>
    </div>
  );
}
export default SettingsNav;
