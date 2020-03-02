import React from "react";
import {NavLink} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/" className="NavBar-Home">
        Home
      </NavLink>
      <NavLink exact to="/soda">
        Soda
      </NavLink>
      <NavLink exact to="/chips">
        Chips
      </NavLink>
      <NavLink exact to="/sardines">
        Sardines
      </NavLink>
    </nav>
  );
}

export default NavBar;