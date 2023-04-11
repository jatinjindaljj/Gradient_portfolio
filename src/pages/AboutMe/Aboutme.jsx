import React from "react";
import {
  GreyCirclesBackground,
  ProgressBackground,
} from "../../assets/Backgrounds";
import classes from "./AboutMe.module.css";
import Highlight from "../../component/HightlightTile/Highlight";
import {
  FigmaIcon,
  FourStartups,
  SixProjects,
  ThreeplusIcon,
} from "../../assets/Icons";

const Aboutme = () => {
  const highlights = [
    {
      text: "Years of experience",
      icon: <ThreeplusIcon />,
      colors: "#1FA2FF 0%, #12D8FA 50%, #A6FFCB 100%",
    },
    {
      text: "Figma expert",
      icon: <FigmaIcon />,
      colors: "#1D976C 0%, #93F9B9 100%",
    },
    {
      text: "Startups",
      icon: <FourStartups />,
      colors: "#FF629F 21.49%, rgba(233, 98, 255, 0.99) 80.42%",
    },
    {
      text: "Real world projects",
      icon: <SixProjects />,
      colors: "#FCC026 0%, rgba(252, 102, 38, 0.91) 100%",
    },
  ];

  return (
    <div className={classes.AboutMeContainer}>
      <div className={classes.AboutMeHero}>
        <section className={classes.clipcontainer}>
          {/* <ProgressBackground /> */}
          <h1 className={classes.clip}>Jatin Jindal</h1>
          <p className={`${classes.clip} ${classes.subheading}`}>
            Product designer based out of New Delhi, India.
          </p>
          <p className={`${classes.clip} ${classes.subsubheading}`}>
            Currently brainstorming and Ideating @ FleetRF
          </p>
        </section>
        <section className={classes.svgbg}>
          <GreyCirclesBackground />
        </section>
      </div>
      <div className={classes.highlights}>
        {highlights.map((highlight) => (
          <Highlight
            text={highlight.text}
            icon={highlight.icon}
            colors={highlight.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default Aboutme;
