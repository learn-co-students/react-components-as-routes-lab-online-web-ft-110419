import React from 'react';
import { NavLink } from 'react-router-dom';
const link = {
  padding: '5px 10px',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: 'green',
  display: 'inline-block',
  margin: "0 5px"
}
const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={link}
        activeStyle={{ backgroundColor: 'darkgreen', textDecoration: "underline" }}>
        Home
      </NavLink>
      <NavLink to="/actors" exact style={link}
        activeStyle={{ backgroundColor: 'darkgreen', textDecoration: "underline" }}>
        Actors
      </NavLink>
      <NavLink to="/directors" exact style={link}
        activeStyle={{ backgroundColor: 'darkgreen', textDecoration: "underline" }}>
        Directors
      </NavLink>
      <NavLink to="/movies" exact style={link}
        activeStyle={{ backgroundColor: 'darkgreen', textDecoration: "underline" }}>
        Movies
      </NavLink>
    </div>
  );
};

export default NavBar;
