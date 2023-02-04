import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import UploadIdeaPin from "./UploadIdeaPin";
function IdeaPin() {
  const [state, setState] = useState(false);
  const showComponent = () => {
    setState(true);
  };
  return (
    <div>
      <h3>Your idea pin drafts</h3>
      <p>Start afresh with a new Idea Pin or keep designing a recent draft</p>
      <Button
        style={{ borderRadius: "20px" }}
        variant="danger"
        onClick={showComponent}
      >
        Create new
      </Button>
      <br />
      <p>Your drafts</p>
      {state && <UploadIdeaPin hru={setState} />}
    </div>
  );
}
export default IdeaPin;
