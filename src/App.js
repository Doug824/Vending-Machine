import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import VendingMachine from "./VendingMachine";
import WhiteClaw from "./WhiteClaw";
import Fritos from "./Fritos";
import KitKat from "./KitKat";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <VendingMachine />} />
          <Route path="/kitkat" exact render={() => <KitKat />} />
          <Route path="/fritos" exact render={() => <Fritos />} />
          <Route path="/whiteclaw" exact render={() => <WhiteClaw />} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;