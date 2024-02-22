import React, { useEffect, useRef } from "react";
import "./sidescroll.css";
import img7 from "./images/7.jpg";
import img11 from "./images/11.jpg";
import img8 from "./images/8.jpg";
import img2 from "./images/2.jpg";
import img12 from "./images/12.jpg";
import img9replacement from "./images/9replacement.png";
import img10 from "./images/10.jpg";
import img4 from "./images/4.jpg";
import img3replacement from "./images/3replacement.png";
import lastdayofsummer from "./images/lastdayofsummer.png";

function Sidescroll() {
  return (
    <div>
      <div className="header">
        <button className="home-button">Home</button>
        <button className="about-button">About Me</button>
        <button className="projects-button">Projects</button>
      </div>
      <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
        <img className="image" alt="" src={img7} draggable="false" />
        <img className="image" alt="" src={img11} draggable="false" />
        <img className="image" alt="" src={img8} draggable="false" />
        <img className="image" alt="" src={img2} draggable="false" />
        <img className="image" alt="" src={img12} draggable="false" />
        <img className="image" alt="" src={img9replacement} draggable="false" />
        <img className="image" alt="" src={img10} draggable="false" />
        <img className="image" alt="" src={img4} draggable="false" />
        <img className="image" alt="" src={img3replacement} draggable="false" />
        <img className="image" alt="" src={lastdayofsummer} draggable="false" />
      </div>
    </div>
  );
}

export default Sidescroll;
