import React from "react";
import Button from "react-bootstrap/Button";

function Branded_Content() {
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
      <h5>Branded Content</h5>
      <p>
        Pinterests Branded Content programme is a service that connects creators
        to brands for sponsorship opportunities.
      </p>
      <h6>Sign up for branded content</h6>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          We’ll do our best to match you to brands
          <br /> but signing up does not guarantee brand deals.
        </p>
        <Button style={{ borderRadius: "30px", fontSize: "14px" }}>
          Sign up
        </Button>
      </div>
    </div>
  );
}
export default Branded_Content;
