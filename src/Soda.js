import React from "react";
import { Link } from "react-router-dom";
import "./Soda.css";

function Soda() {
  return (
    <div className="Soda">
      <div className="Soda-image"></div>
      <div className="Soda-container">
        <h1>OMG Sugarrrrrrrrr.</h1>
        <Link exact to="/">
          Go back
      </Link>
      </div>
      <div className="Soda-image"></div>
    </div>
  );
}

export default Soda;