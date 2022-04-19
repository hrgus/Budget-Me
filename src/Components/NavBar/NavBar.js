import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <nav className="NavBarLink">
        <NavLink to="/overview">Overview</NavLink>
      </nav>
      <nav className="NavBarLink">
        <NavLink to="/budget">Budget</NavLink>
      </nav>
      <nav className="NavBarLink">
        <NavLink to="/savings">Savings</NavLink>
      </nav>
    </nav>
  );
}

export default NavBar;
