import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <div className="VendingMachine-h1">
        <h1>Hello, I am a vending machine. What would you like to eat?</h1>
      </div>
      <div className="VendingMachine-Snacks">
        <Link exact to="/soda">
          Soda
        </Link>
        <Link exact to="/chips">
          Chips
        </Link>
        <Link exact to="/sardines">
          Sardines
        </Link>
      </div>
    </div>
  );
}

export default VendingMachine;