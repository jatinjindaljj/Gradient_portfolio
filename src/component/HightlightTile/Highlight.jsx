import React from "react";
import classes from "./Highlight.module.css";
const Highlight = ({ text, icon, colors }) => {
  return (
    <div className={classes.HighlightContainer}>
      <section className={classes.iconContainer}>{icon}</section>
      <p
        style={{
          background: `linear-gradient(90deg,${colors})`,
          backgroundClip: "text",
          webkitBackgroundClip: "text",
          
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Highlight;
