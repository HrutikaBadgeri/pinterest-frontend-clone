import React from "react";
import { Button } from "react-bootstrap";
const UploadIdeaPin = (props) => {
  return (
    <div
      style={{
        width: "700px",
        height: "400px",
        backgroundColor: "#e9e9e9",
        alignSelf: "center",
        margin: "auto",
        borderRadius: "30px",
      }}
    >
      <Button
        style={{ backgroundColor: "black" }}
        onClick={() => {
          props.hru(false);
        }}
      >
        X
      </Button>
    </div>
  );
};
export default UploadIdeaPin;
