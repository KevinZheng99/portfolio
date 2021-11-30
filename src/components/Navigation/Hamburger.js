import React, { useState } from "react";

import classes from "./Hamburger.module.css";

export default function Hamburger() {
  const [isHamburger, setIsHamburger] = useState(true);

  const changeHamburgerHandler = () => {
    setIsHamburger(!isHamburger);
  };

  return (
    <div
      className={`${classes.hamburger} ${!isHamburger && classes.open}`}
      onClick={changeHamburgerHandler}
    >
      <span className={classes["hamburger-line"]}></span>
      <span className={classes["hamburger-line"]}></span>
      <span className={classes["hamburger-line"]}></span>
    </div>
  );
}
