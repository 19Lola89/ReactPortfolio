import React, { Component } from "react";
import video from "../assets/ciurlionis.mp4";

export class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div className="content">
          <h1>Welcome to my page </h1>
          <p>abc bikjv zksbv </p>
        </div>
      </div>
    );
  }
}

export default Hero;
