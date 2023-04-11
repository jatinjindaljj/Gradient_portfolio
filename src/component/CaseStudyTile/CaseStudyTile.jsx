import React from "react";
import GenericButton from "../GenericButton/GenericButton";
import classes from "./CaseStudyTile.module.css";
const CaseStudyTile = ({
  image,
  heading,
  buttonText,
  backgroundGradient,
  sectionBackground,
}) => {
  return (
    <div
      className={classes.Tile}
      style={{
        background: `linear-gradient(to bottom right,${backgroundGradient}`,
      }}
    >
      <img src={image} alt="" color={"blue"} />
      <section style={{ background: sectionBackground }}>
        <h2>{heading}</h2>
        <GenericButton name={buttonText} url={""} arrow small />
      </section>
    </div>
  );
};

export default CaseStudyTile;
