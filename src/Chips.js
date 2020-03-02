import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chips.css";

function Chips() {
  const [bags, setBags] = useState([]);

  let randomY = Math.random() * 100;
  let randomX = Math.random() * 100;

  const addBag = () => {
    const newBag = { position: "absolute", top: `${randomY}vh`, left: `${randomX}vw`, width: "150px", height: "150px", zIndex: "1" };
    setBags([...bags, newBag]);
  }


  return (
    <div className="Chips">
      <div className="Chips-container">
        <h1>Bags Eaten: {bags.length}</h1>
        <button onClick={addBag}>Nom nom nom</button>
        <Link exact to="/">
          Go back
        </Link>
      </div>

      {bags.map(style => (
        <img src="https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg" style={style} alt="chips" />
      ))}
    </div>
  );
}

export default Chips;