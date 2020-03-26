import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Actors from "../components/Actors";
import Directors from "../components/Directors";
import Movies from "../components/Movies";

const App = props => {
  return (
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/actors" component={Actors} />
      <Route path="/directors" component={Directors} />
      <Route path="/movies" component={Movies} />
    </div>
  );
};

export default App;
