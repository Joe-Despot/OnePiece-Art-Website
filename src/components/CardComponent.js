import React from "react";
import "../style.css";

export default function CardComponent() {
  return (
    <div className="card--container">
      <img className="card-image" src={require("../images/card-image.png")} />
      <div>
        <p>
          <img
            className="card-star-image"
            src={require("../images/star-image.png")}
          />{" "}
          <span> 5.0 </span>
          <span className="grey-text">(6) • </span>
          <span className="grey-text">USA</span>
        </p>
        <p>Life lessons with Katie</p>
        <p><span className="bold">From $136</span> / person</p>
      </div>
    </div>
  );
}
