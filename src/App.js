import React from "react";
import './App.css';

import { Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import MainImage from './components/MainImage';
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
            <MainImage />
          </Route>

          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
        
      </div>
    </>
  );
}

export default App;
