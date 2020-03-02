import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
