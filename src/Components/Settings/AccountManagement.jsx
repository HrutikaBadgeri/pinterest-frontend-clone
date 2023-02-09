import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const AccountManagement = () => {
  return (
    <div
      style={{
        marginLeft: "370px",
        marginRight: "auto",
        width: "35%",
        position: "relative",
        textAlign: "left",
        marginTop: "40px",
        fontSize: "14px",
      }}
    >
      <h5>Account Management</h5>
      <p>
        Make changes to your email address, password and account type. This
        information is private and will not be visible in your public profile.
      </p>
      <Form>
        <div>
          <div>
            <Form.Text className="text-muted">Email•Private</Form.Text>
            <br />
            <Form.Group className="mb-3">
              <Form.Control
                style={{ width: "100%", borderRadius: "15px" }}
                type="email"
                placeholder="enter email"
              />
            </Form.Group>

            <Form.Text className="text-muted">Password</Form.Text>
            <br />
            <div style={{ display: "flex" }}>
              <Form.Group className="mb-3">
                <Form.Control
                  style={{
                    width: "350px",
                    borderRadius: "15px",
                  }}
                  type="password"
                  placeholder="enter password"
                />
              </Form.Group>
              <Button
                style={{
                  borderRadius: "22px",
                  backgroundColor: "#e9e9e9",
                  color: "black",
                  justifyContent: "end",
                  borderColor: "#e9e9e9",
                  marginLeft: "30px",
                }}
              >
                Change
              </Button>
            </div>
          </div>
        </div>
      </Form>
      <h6>Account Changes</h6>
      <p>
        <b>Convert to a business account</b>
      </p>
      <div style={{ display: "flex" }}>
        <p style={{ justifyContent: "flex-start" }}>
          Grow your business or brand with tools like <br />
          ads and analytics. Your content, profile and <br /> followers will
          stay the same.
        </p>
        <Button
          style={{
            backgroundColor: "#e9e9e9",
            borderRadius: "20px",
            border: "#e9e9e9",
            fontSize: "12px",
            marginLeft: "10px",
            color: "black",
            padding: "10px",
          }}
        >
          Convert Account
        </Button>
      </div>

      <p>
        <b>Deactivate account</b>
      </p>
      <div style={{ display: "flex" }}>
        <p>Hide your pins and profile</p>
        <Button
          style={{
            backgroundColor: "#e9e9e9",
            borderRadius: "10px",
            border: "#e9e9e9",
            color: "black",
            marginLeft: "40px",
            fontSize: "12px",
          }}
        >
          Deactivate Account
        </Button>
      </div>

      <p>
        <b>Delete your data and account</b>
      </p>
      <div style={{ display: "flex" }}>
        <p>Delete your account and account data</p>
        <Button
          style={{
            backgroundColor: "#e9e9e9",
            border: "#e9e9e9",
            borderRadius: "10px",
            color: "black",
            marginLeft: "40px",
            fontSize: "12px",
          }}
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
};
export default AccountManagement;
