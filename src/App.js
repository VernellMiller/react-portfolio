import React from "react";
import './App.css';

import { Route, Switch } from "react-router-dom";
import Navigation from './components/Nav';
import Introduction from "./components/Introduction";
import MainImage from './components/MainImage';
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <div className="App">

        <Navigation />
        <Switch>
          <Route exact path="/">
            <Introduction />
            <Skills />
            <Projects />
            <Resume />
          </Route>

          <Route path="/resume">
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />

      </div>
    </>
  );
}

export default App;
