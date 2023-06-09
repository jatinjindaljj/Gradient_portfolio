import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/Icons";
import classes from "./GenericButton.module.css";
const GenericButton = ({ url, name, arrow, active, small }) => {
  return (
    <Link
      to={url}
      className={`${classes.buttonContainer} ${
        arrow ? classes.tileButton : classes.menuButton
      } ${!arrow && active && classes.active}`}
      style={small ? { fontSize: "2vmin" } : {}}
    >
      {name}
      {arrow && (
        <div className={classes.iconContainer}>
          <ArrowIcon />
        </div>
      )}
    </Link>
  );
};

export default GenericButton;
