import React from "react";

import classes from "./Hamburger.module.css";

export default function Hamburger(props) {
  return (
    <div
      className={`${classes.hamburger} ${props.isOpen && classes.open}`}
      onClick={props.onChangeHamburger}
    >
      <span className={classes["hamburger-line"]}></span>
      <span className={classes["hamburger-line"]}></span>
      <span className={classes["hamburger-line"]}></span>
    </div>
  );
}
