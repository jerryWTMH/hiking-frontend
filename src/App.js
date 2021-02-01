import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home.js";
import Home3 from "./pages/Home3.js";
import Register0form from "./pages/Register0-form";
import Register1form from "./pages/Register1-form";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register0form />
          </Route>
          <Route path="/register1">
            <Register1form />
          </Route>
          <Route path="/Home3">
            <Home3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
