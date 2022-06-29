import React from "react";
import "../style.css";

export default function Hero() {
  return (
    <div className="hero--container">
      <img
        className="hero--images"
        src={require("../images/group-images.png")}
      />
      <h1 className="hero--title">Online expirience</h1>
      <p className="hero--text">
      Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </div>
  );
}
