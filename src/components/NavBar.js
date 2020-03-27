import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/"><button>Home</button></NavLink>
      <NavLink to="/movies"><button>Movies</button></NavLink>
      <NavLink to="/directors"><button>Directors</button></NavLink>
      <NavLink to="/actors"><button>Actors</button></NavLink>
    </div>
  );
};

export default NavBar;
