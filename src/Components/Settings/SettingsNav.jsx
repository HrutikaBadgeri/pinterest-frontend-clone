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
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/Settings/PublicProfile"
          >
            Public Profile
          </Link>
        </Nav.Link>

        <Nav.Link className="active" style={style}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/Settings/PersonalInformation"
          >
            Personal Information
          </Link>
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/Settings/AccountManagement"
          >
            Account Management
          </Link>
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/Settings/ClaimAccounts"
          >
            Claim Accounts
          </Link>
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/Settings/Notifications"
          >
            Notifications
          </Link>
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          Privacy and Data
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/Settings/SecurityLogins"
          >
            Security and Logins
          </Link>
        </Nav.Link>
        <Nav.Link className="active" style={style}>
          <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/Settings/BrandedContent"
          >
            Branded Content
          </Link>
        </Nav.Link>
      </Nav>
    </div>
  );
}
export default SettingsNav;
