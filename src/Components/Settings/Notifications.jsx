import React from "react";

import Button from "react-bootstrap/Button";
function Notifications() {
  return (
    <div
      style={{
        marginLeft: "370px",
        marginRight: "auto",
        width: "30%",
        position: "relative",
        textAlign: "left",
        marginTop: "40px",
        fontSize: "14px",
      }}
    >
      <h5>Notifications</h5>
      <p>
        We'll always let you know about important changes, but you pick what
        else you want to hear about. Learn more
      </p>
      <div style={{ display: "flex" }}>
        <p>
          {" "}
          <b>On Pinterest</b> <br />
          Pick which notifications to see while in the app or on the site.{" "}
          <br />
          <b>Learn more</b>
          <Button>Edit</Button>
        </p>
      </div>
    </div>
  );
}

export default Notifications;
