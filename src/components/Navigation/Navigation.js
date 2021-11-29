import React, { useLayoutEffect, useState } from "react";

import Hamburger from "./Hamburger";
import NavigationLinks from "./NavigationLinks";
import classes from "./Navigation.module.css";

export default function Navigation() {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
