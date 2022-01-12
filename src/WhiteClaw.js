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
            "url(https://giphy.com/clips/cameronpaulsmith-hello-polar-bear-growl-ekMtn76P13HbTwNwkP)"
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
