import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./WhiteClaw.css";

class WhiteClaw extends Component {
  render() {
    return (
      <div
        className="WhiteClaw"
        style={{
          backgroundImage:
            "url(https://media3.giphy.com/media/mMl1DphmngffO/giphy.gif?cid=ecf05e4747ececllbpo5g5ho38mn3eeypl46hff7lvejdoyh&rid=giphy.gif&ct=g)"
        }}>
        <Message>
          <h1>WRONG WHITE CLAWS!</h1>
          <h1><Link to="/">Go Back, GO BACK!!</Link></h1>
        </Message>
      </div>
    );
  }
}

export default WhiteClaw;
