import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import kitkatImg from "./KitKat.png";
import "./KitKat.css";

class KitKat extends Component {
  render() {
    return (
      <div className="KitKat">
        <img src={kitkatImg} alt="KitKat Bar" />
        <Message>
          <h1>CHOCOLATE YESS!</h1>
          <h1><Link to="/">I'm Okay, let's go back</Link></h1>
        </Message>
        <img src={kitkatImg} alt="KitKat Bar" />
      </div>
    );
  }
}


export default KitKat;