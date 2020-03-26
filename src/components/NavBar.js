import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const nav = {
    display: "block",
    width: "50px"
  };

  return (
    <div className="navbar">
      <NavLink to="/" style={nav}>
        Home
      </NavLink>
      <NavLink to="/actors" style={nav}>
        Actors
      </NavLink>
      <NavLink to="/directors" style={nav}>
        Directors
      </NavLink>
      <NavLink to="/movies" style={nav}>
        Movies
      </NavLink>
    </div>
  );
};

export default NavBar;
