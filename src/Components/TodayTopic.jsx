import React from "react";
import Photo from "../assets/bg.png";
function TodayTopic(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.link})`,
        width: "365px",
        height: "260px",
        borderRadius: "30px",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <div style={{ alignSelf: "flex-end" }}>
        <p style={{ color: "white" }}>{props.subtitle}</p>
        <h3 style={{ color: "white" }}>{props.title}</h3>
      </div>
    </div>
  );
}

export default TodayTopic;
