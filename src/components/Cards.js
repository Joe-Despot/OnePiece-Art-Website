import React from "react";

export default function Card(props) {
  const firstName = "Donquixote";
  const lastName = "Doflamingo";
  console.log(props);
  return (
    <div className="card--container">
      <img
        alt="doffy"
        className="card-image"
        src={require(`../images/${props.image}`)}
      />
      <p>
        <img
          alt="star"
          className="card-star-image"
          src={require("../images/star-image.png")}
        />
        <span> {props.rating} </span>
        <p className="card-characterName">{props.name}</p>
      </p>
    </div>
  );
}
