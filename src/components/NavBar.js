import React from 'react';
import { NavLink } from 'react-router-dom';
const link = {
  padding: '5px 10px',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: 'green',
  display: 'inline-block',
  cursor: 'pointer',
  margin: "0 5px"
}
const activeClick = (e) => {
  e.target.style.backgroundColor = "red"
}
const hover = (e, coluor) => {
  e.target.style.backgroundColor = coluor
}
const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={link} onMouseOver={e => hover(e, "black")}
        onMouseLeave={e => hover(e, "green")}
        onMouseDown={e => activeClick(e)}
        activeStyle={{ backgroundColor: 'darkgreen', textDecoration: "underline" }}>
        Home
      </NavLink>
      <NavLink to="/actors" exact style={link} onMouseOver={e => hover(e, "black")}
        onMouseLeave={e => hover(e, "green")}
        onMouseDown={e => activeClick(e)}
        activeStyle={{ backgroundColor: 'darkgreen', textDecoration: "underline" }}>
        Actors
      </NavLink>
      <NavLink to="/directors" exact style={link} onMouseDown={e => activeClick(e)} onMouseOver={e => hover(e, "black")}
        onMouseLeave={e => hover(e, "green")}
        activeStyle={{ backgroundColor: 'darkgreen', textDecoration: "underline" }}>
        Directors
      </NavLink>
      <NavLink to="/movies" exact style={link} onMouseOver={e => hover(e, "black")}
        onMouseDown={e => activeClick(e)}
        onMouseLeave={e => hover(e, "green")}
        activeStyle={{ backgroundColor: 'darkgreen', textDecoration: "underline" }}>
        Movies
      </NavLink>
    </div>
  );
};

export default NavBar;
