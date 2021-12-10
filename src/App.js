import React from "react";
import './App.css';

import { Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Introduction from "./components/Introduction";
import MainImage from './components/MainImage';
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <div className="App">

        <Nav />
        <Switch>
          <Route exact path="/">
            <Introduction />
            <MainImage />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>

      </div>
    </>
  );
}

export default App;
