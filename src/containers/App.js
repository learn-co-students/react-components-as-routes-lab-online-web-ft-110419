import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Home exact path="/" component={Home} />
        <Actors exact path="/actors" component={Actors} />
        <Directors exact path="/directors" component={Directors} />
        <Movies exact path="/movies" component={Movies} />
      </div>
    </Router>
  );
};

export default App
