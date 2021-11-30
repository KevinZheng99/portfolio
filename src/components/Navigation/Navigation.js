import React, { useState } from "react";

import Hamburger from "./Hamburger";
import NavigationLinks from "./NavigationLinks";
import Menu from "./Menu";
import useWindowWidth from "../../hooks/use-window-width";
import classes from "./Navigation.module.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(true);
  const windowWidth = useWindowWidth();

  const changeHamburgerHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={classes.navigation}>
      <a className={classes.logo} href="/">
        KZ
      </a>
      {windowWidth > 768 && <NavigationLinks />}
      {windowWidth <= 768 && (
        <Hamburger onChangeHamburger={changeHamburgerHandler} isOpen={isOpen} />
      )}
      {windowWidth <= 768 && <Menu isOpen={!isOpen} />}
    </nav>
  );
}
