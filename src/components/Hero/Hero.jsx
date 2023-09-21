import React from "react";

import './Hero.scss'
import heroImg from "..//../assets/jpeg/heroImg.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={heroImg} alt="" className="heroImg" />

      <h1 className="heroHeading">Online Experiences</h1>
      <p className="heroPara">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
        
      </p>
    </div>
  );
}
