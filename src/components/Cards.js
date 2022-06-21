import React from "react";
import {
  Aki,
  AngelDevil,
  EyepatchDenji,
  GunDevil,
  Kishibe,
  Power,
} from "./Images";

const Cards = ({ checkForIds }) => {
  const info = [
    { name: "Aki", img: Aki, id: 0 },
    { name: "Angel Devil", img: AngelDevil, id: 1 },
    { name: "Eyepatch Denji", img: EyepatchDenji, id: 2 },
    { name: "Gun Devil", img: GunDevil, id: 3 },
    { name: "Kishibe", img: Kishibe, id: 4 },
    { name: "Power", img: Power, id: 5 },
  ];

  const shuffled = info.sort((a, b) => 0.5 - Math.random());

  return (
    <div className="appContainer">
      {shuffled.map((card) => (
        <div
          onClick={() => {
            checkForIds(card.id);
          }}
          id={card.id}
          className="cardContainer"
          style={{ width: "225px" }}
        >
          <img src={card.img} alt={card.name}></img>
          <h1 style={{ margin: "0 auto" }}>{card.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Cards;
