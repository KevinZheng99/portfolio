import React from "react";

import Hamburger from "./Hamburger";
import NavigationLinks from "./NavigationLinks";
import useWindowWidth from "../../hooks/use-window-width";
import classes from "./Navigation.module.css";

export default function Navigation() {
  const width = useWindowWidth();

  return (
    <div className={classes.navigation}>
      <a className={classes.logo} href="/">
        KZ
      </a>
      {width > 768 && <NavigationLinks />}
      {width <= 768 && <Hamburger />}
    </div>
  );
}
