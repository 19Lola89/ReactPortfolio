import React, { Component } from "react";
import video from "../assets/ciurlionis.mp4";

export class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <video src={video} autoPlay loop muted />
      </div>
    );
  }
}

export default Hero;
