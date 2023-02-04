import React from "react";
import web from "../../assets/website-icon-8.png";

import Button from "react-bootstrap/Button";
const Claim_Accounts = () => {
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
      <h5>Claimed accounts</h5>
      <p>
        When you claim an account, you can monitor analytics and ensure your
        name or brand name appears on every Pin created from your sites.
        <b>Learn more</b>
      </p>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "25px", height: "25px" }}
            src={web}
            alt="web_image"
          />
          <p style={{ marginLeft: "10px", fontWeight: "bold" }}>Websites</p>
        </div>
        <Button variant="danger" style={{ borderRadius: "20px" }}>
          Claim
        </Button>
      </div>
    </div>
  );
};
export default Claim_Accounts;
