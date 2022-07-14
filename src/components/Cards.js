import React from "react";

export default function Card(props) {
  return (
    <div className="characterSlide-component">
      <img
        alt="doffy"
        className="card-image"
        src={require(`../images/${props.image}`)}
      />
      <p>
        <span className="card-characterName">{props.name} </span>
        <img
          alt="star"
          className="card-star-image"
          src={require("../images/star-image.png")}
        />
        <span> {props.rating} </span>
      </p>
    </div>
  );
}
