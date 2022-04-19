import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/overview">Overview</NavLink>
      <NavLink to="/budget">Budget</NavLink>
      <NavLink to="/savings">Savings</NavLink>
    </nav>
  );
}

export default NavBar;
