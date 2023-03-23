import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GenericButton from "../GenericButton/GenericButton";
import classes from "./MainNav.module.css";
const MainNav = () => {
  const location = useLocation();
  const [navbuttons, setnavbuttons] = useState([
    { name: "Case studies", page: "/" },
    { name: "Visual designs", page: "/Visual_designs" },
    { name: "About me", page: "/About_me" },
  ]);
  // const [active,setActive]=useState()

  const htmlbuttons = navbuttons.map((element, idx) => {
    return (
      <div key={idx}>
        <GenericButton
          url={element.page}
          name={element.name}
          active={location.pathname === element.page}
        />
      </div>
    );
  });
  return <nav className={classes.mainNavContainer}>{htmlbuttons}</nav>;
};

export default MainNav;
