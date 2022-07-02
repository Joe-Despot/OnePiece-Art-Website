import React from "react";


export default function Card() {
    const firstName = "Donquixote";
    const lastName = "Doflamingo";
    return (
      <div className="card--container">
        <img
          className="card-image"
          src={require("../images/doflamingo-lifelessons.jpg")}
        />
  
        <p>
          <img
            className="card-star-image"
            src={require("../images/star-image.png")}
          />{" "}
          <span> 5.0 </span>
          <span className="grey-text">(6) • </span>
          <span className="grey-text">USA</span>
        </p>
        <p>
          Life lessons with {firstName} {lastName}
        </p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
    );
  }
  