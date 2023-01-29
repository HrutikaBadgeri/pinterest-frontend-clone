import React from "react";
import TodayTopic from "./TodayTopic";
import Breathe from "../assets/breathe.png";
import Concert from "../assets/concert.jpg";
import Nausica from "../assets/Nausica.png";
import Sunflower from "../assets/sunflower.png";
import Sky from "../assets/sky.png";
import Space from "../assets/space.png";
function Today() {
  const tdate = new Date();
  let day = tdate.getDate();
  let month = tdate.getMonth() + 1;
  let year = tdate.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  const images = [
    {
      title: "Get Breathing",
      subTitle: "Learn different forms of Breathing.",
      url: Breathe,
    },
    {
      title: "Justin Bieber",
      subTitle: "10 things happened different in the Justin Bieber's concert",
      url: Concert,
    },
    {
      title: "Movies and chill",
      subTitle: "Top rated Studio Ghibli Movies",
      url: Nausica,
    },
    {
      title: "Healthy humans",
      subTitle: "Sunflower seeds good for heart?",
      url: Sunflower,
    },
    {
      title: "Sky aesthetic",
      subTitle: "Teenagers obessed with colorful skies",
      url: Sky,
    },
    {
      title: "Astro World",
      subTitle: "Pictures from Hubble Telescope",
      url: Space,
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>{currentDate}</p>
        <h3>Stay Inspired</h3>
      </div>
      <div
        style={{
          // alignItems: "center",
          width: "70vw",
          display: "flex",
        }}
      >
        {images.map((img) => {
          return (
            <TodayTopic
              title={img.title}
              subtitle={img.subTitle}
              link={img.url}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Today;
