import React, {Component} from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

class VendingMachine extends Component {
  render(){
    return(
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}>
        <Message>
          <h1>Hey! Vending Machine here, what can I get ya!??</h1>
        </Message>
        <Message>
          <h1><Link to="/kitkat">KitKat</Link></h1>
          <h1><Link to="/Fritos">Fritos</Link></h1>
          <h1><Link to="/whiteclaw">Fresh WhiteClaw</Link></h1>
        </Message>
      </div>
    )
  }
}


export default VendingMachine;
