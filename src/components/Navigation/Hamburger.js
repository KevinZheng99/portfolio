import React from "react";

import classes from "./Hamburger.module.css";

export default function Hamburger() {
  return (
    <div className={classes.hamburger}>
      <div className={classes["hamburger-line"]}></div>
      <div className={classes["hamburger-line"]}></div>
      <div className={classes["hamburger-line"]}></div>
    </div>
  );
}
