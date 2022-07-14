import React from "react";
import "../style.css";
import Card from "./Cards";

export default function Hero() {
  const names = ["Donquixote Doflamingo", "Iceberg", "Big Mom"];
  const pictures = [
    "doflamingo-lifelessons.jpg",
    "Iceberg.jpg",
    "Charoltte-Linlin.jpg",
  ];
  let characterSlideList = [];

  for (let i = 0; i < names.length; i++) {
    characterSlideList.push(
      <Card image={pictures[i]} name={names[i]} rating="5" />
    );
  }

  return <div className="characterSlides--container">{characterSlideList}</div>;
}
