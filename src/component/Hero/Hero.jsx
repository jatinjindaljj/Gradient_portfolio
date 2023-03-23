import React from "react";
import { HeroBackground } from "../../assets/Backgrounds";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={classes.HeroContainer}>
      <HeroBackground />
      <h3>I Design softwares which fulfills both business and User’s need</h3>
    </div>
  );
};

export default Hero;
