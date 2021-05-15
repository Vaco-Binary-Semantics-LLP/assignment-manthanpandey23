import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Team from "./teams/Team.jsx";
import Player from "./players/Player";
import Navigation from "./Navigation";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <React.Fragment>     
     <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/player">
          <Player />
        </Route>
      </Switch>
      </BrowserRouter>
    </React.Fragment>  
  );
}

export default App;
