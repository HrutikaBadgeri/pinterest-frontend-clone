import React from "react";
import Form from "react-bootstrap/Form";

const Personal_Information = () => {
  return (
    <div
      style={{
        marginLeft: "370px",
        marginRight: "auto",
        width: "40%",
        position: "relative",
        textAlign: "left",
        marginTop: "40px",
        fontSize: "14px",
      }}
    >
      <h5>Personal information</h5>
      <p>
        Edit your basic personal info to improve recommendations. This
        information is private and will not be visible in your public profile.
      </p>
      <Form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Form.Text className="text-muted">Gender</Form.Text>
            <div>
              <input
                style={{ margin: "10px", fontSize: "24px" }}
                type="radio"
                value="male"
                name="gender"
              />{" "}
              Male
              <input
                style={{ margin: "10px" }}
                type="radio"
                value="female"
                name="gender"
              />{" "}
              Female
              <input
                style={{ margin: "10px" }}
                type="radio"
                value="plastic bag"
                name="gender"
              />{" "}
              Plastic bag
            </div>
          </div>
        </div>
        <Form.Text className="text-muted">Country/region</Form.Text>
        <br />
        <select
          style={{
            width: "50%",
            height: "30px",
            borderRadius: "10px",
            margin: "10px",
          }}
          name="India"
        >
          <option value="argentina">Argentina</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="bandladesh">Bangladesh</option>
          <option value="bangkok">Bangkok</option>
          <option value="berlin">Berlin</option>
          <option value="indonesia">Indonesia</option>
          <option value="india">India</option>
          <option value="ireland">Ireland</option>
        </select>
        <br />
        <Form.Text className="text-muted">Language</Form.Text>
        <br />
        <select
          style={{
            width: "50%",
            height: "30px",
            borderRadius: "10px",
            margin: "10px",
          }}
          name="India"
        >
          <option value="argentina">English</option>
          <option value="africa">Tamil</option>
          <option value="america">Konkani</option>
          <option value="bandladesh">Marathi</option>
          <option value="bangkok">Kannada</option>
          <option value="berlin">Telugu</option>
          <option value="indonesia">Malayalam</option>
          <option value="india">Tulu</option>
          <option value="ireland">Desi punjabi</option>
          <option value="ireland">Gujrati</option>
          <option value="ireland">Odiya</option>
          <option value="ireland">Hindi</option>
        </select>
      </Form>
    </div>
  );
};
export default Personal_Information;
