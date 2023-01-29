import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Pfp from "../../assets/icons8-male-user-50.png";
function PublicProfile() {
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
      <h3>Public Profile</h3>
      <p>People visiting your profile will see the following info</p>
      <img src={Pfp}></img>
      <Button
        style={{
          borderRadius: "22px",
          marginLeft: "30px",
          backgroundColor: "#e9e9e9",
          color: "black",
          borderColor: "#e9e9e9",
        }}
        type="submit"
      >
        Change
      </Button>
      <Form>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Form.Text className="text-muted">First name</Form.Text>
            <br />
            <Form.Group className="mb-3" style={{ width: "170px" }}>
              <Form.Control type="input" placeholder="enter first name" />
            </Form.Group>
          </div>
          <div>
            <Form.Text className="text-muted">Surname</Form.Text>
            <Form.Group className="mb-3" style={{ width: "170px" }}>
              <Form.Control type="input" placeholder="enter surname" />
            </Form.Group>
          </div>
        </div>

        <Form.Text className="text-muted">About</Form.Text>
        <Form.Group className="mb-3">
          <Form.Control type="textarea" placeholder="write about yourself" />
        </Form.Group>
        <Form.Text className="text-muted">Website</Form.Text>
        <Form.Group className="mb-3">
          <Form.Control type="input" placeholder="add a link to your website" />
        </Form.Group>
        <Form.Text className="text-muted">Username</Form.Text>
        <Form.Group className="mb-3">
          <Form.Control type="input" placeholder="username" />
        </Form.Group>
      </Form>
    </div>
  );
}
export default PublicProfile;
