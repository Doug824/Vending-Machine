import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import VendingMachine from "./VendingMachine";
import Sardines from "./WhiteClaw";
import Chips from "./Freetos";
import Soda from "./KitKat";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <VendingMachine />} />
          <Route path="/soda" exact render={() => <Soda />} />
          <Route path="/chips" exact render={() => <Chips />} />
          <Route path="/sardines" exact render={() => <Sardines />} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;