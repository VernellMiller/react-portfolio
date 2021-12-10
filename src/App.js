import React from "react";
import './App.css';

import { Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Nav from './components/Nav';
import MainImage from './components/MainImage';

import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <div className="App">

        <Nav />
        <MainImage />

        
          <Route path="/resume">
            <Resume />
          </Route>
         
          

          
    

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
          </a>
        */}
      </div>
    </>
  );
}

export default App;
