import Form from "react-bootstrap/Form";
import File from "../assets/file.png";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function CreatePin() {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [save, setSave] = useState(false);
  const styles = {
    backgroundColor: "#e9e9e9",
    display: "flex",
    height: "100%",
    width: "100vw",
    marginRight: 0,
    marginRight: 0,
    marginLeft: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };
  const formDiv = {
    backgroundColor: "white",
    borderRadius: "20px",
    display: "flex",
    padding: "25px",
    marginBottom: "155px",
  };
  const photoDiv = {
    backgroundColor: "#e9e9e9",
    display: "grid",
    borderRadius: "16px",
    width: "271px",
    height: "400px",
    margin: "25px",
    textAlign: "center",
  };
  const handleImage = (events) => {
    setFile(URL.createObjectURL(events.target.files[0]));
    setFileName(events.target.files[0].name);
    console.log(file);
  };
  function something() {
    if (file == "") {
      return (
        <div style={{ width: "100%", height: "160px", padding: "30px" }}></div>
      );
    } else {
      return (
        <img
          style={{ width: "100%", height: "160px", padding: "30px" }}
          src={file}
        />
      );
    }
  }
  return (
    <div style={styles}>
      <div style={formDiv}>
        <div style={photoDiv}>
          <div style={{ alignItems: "center" }}>
            {something()}
            <img src={File} />
            <br />
            <br />
            <input
              type="file"
              onChange={handleImage}
              style={{ width: "100px" }}
            />
          </div>

          <p style={{ alignSelf: "flex-end" }}>
            We recommend using high-quality .jpg files under 20MB
          </p>
        </div>
        <Form style={{ marginTop: "30px" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Add your title here" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              placeholder="Tell everyone what your pin is about"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Add a description link" />
          </Form.Group>
          <Button
            style={{ width: "84px", height: "50px", justifyContent: "end" }}
            variant="danger"
            onClick={() => {
              setSave(true);
            }}
          >
            Save
          </Button>
          {save && <p>{fileName} was saved to your pins!</p>}
        </Form>
      </div>
    </div>
  );
}
export default CreatePin;
