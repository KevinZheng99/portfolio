import React from "react";

import classes from "./Navigation.module.css";

export default function Navigation() {
  return (
    <div className={classes.navigation}>
      <a className={classes.logo} href="#">
        KZ
      </a>

      <div>
        <a href="#">About</a>
        <a href="#">Work</a>
        <a className={classes.resume} href="#">
          Resume
        </a>
      </div>
    </div>
  );
}
