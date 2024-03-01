import React from "react";
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
  const track = document.getElementById("image-track");

  const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -90);

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  const handleOnWheel = (e) => {
    const delta = -Math.sign(e.deltaY);

    const maxDelta = window.innerWidth / 2;
    const percentage = delta * 3 + parseFloat(track.dataset.prevPercentage);
    const nextPercentage = Math.max(Math.min(percentage, 0), -90);

    track.dataset.prevPercentage = nextPercentage;

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  document.addEventListener("wheel", handleOnWheel);

  window.onmousedown = (e) => handleOnDown(e);

  window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleOnUp(e);

  window.ontouchend = (e) => handleOnUp(e.touches[0]);

  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

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
