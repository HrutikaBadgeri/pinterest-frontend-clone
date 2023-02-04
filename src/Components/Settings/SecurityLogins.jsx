import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Security_Logins() {
  return (
    <div
      style={{
        marginLeft: "370px",
        marginRight: "auto",
        width: "27%",
        position: "relative",
        textAlign: "left",
        marginTop: "50px",
      }}
    >
      <h4>Security and Logins</h4>
      <p>
        Include additional security such as turning on two-factor authentication
        and checking your list of connected devices to keep your account, Pins
        and boards safe.
        <b>Learn more</b>
      </p>
      <p>
        To turn on two-factor authentication, first you need to{" "}
        <b>confirm your email address.</b>
      </p>

      <h5>Login options</h5>
      <p>
        Use your social account to log in to Pinterest. <b>Learn more</b>
      </p>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Use your facebook account to login"
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label="Use your google account to login"
            />
            <br />
            <h5>App logins</h5>
            <p>
              Keep track of everywhere you've logged in with your Pinterest
              profile and remove access from apps you're no longer using with
              Pinterest. Learn more; Opens a new tab
            </p>
            <p>You have not approved any apps</p>
          </div>
        ))}
        <h5>Connected devices</h5>
        <p>
          This is a list of devices that have logged in to your account. Revoke
          access to any devices you don't recognise. Learn more; Opens a new tab
        </p>
        <Button style={{ borderRadius: "10px" }}>Show sessions</Button>
      </Form>
    </div>
  );
}
