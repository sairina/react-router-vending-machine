import React from "react";
import { Link } from "react-router-dom";
import "./Sardines.css";

function Sardines() {
  return (
    <div className="Sardines">
      <div className="Sardines-container">
        <h1>You don't eat the sardines. They eat you. Go back.</h1>
        <Link exact to="/">
          Go back
      </Link>
      </div>
    </div>
  );
}

export default Sardines;