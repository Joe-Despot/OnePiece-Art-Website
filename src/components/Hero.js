import React from "react";
import "../style.css";

export default function Hero() {
  return (
    <div className="hero--container">
      <div className="hero-hardcodedimages">
        <img
          className="chibi-luffy"
          src={require("../images/chibi-luffy.png")}
        />
        <img
          className="onepiece-wallpaper"
          src={require("../images/onepiece-wallpaper.jpg")}
        />
        <img
          className="brook"
          src={require("../images/brook-image.png")}
        />
      </div>
      <h1 className="hero--title">Pirate expirience!</h1>
      <p className="hero--text">
        Join our community and add your favourite One Piece art to the site
      </p>
    </div>
  );
}
