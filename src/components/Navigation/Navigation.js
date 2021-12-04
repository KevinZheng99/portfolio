import React, { useState } from "react";

import Hamburger from "./Hamburger";
import NavigationLinks from "./NavigationLinks";
import Menu from "./Menu";
import Overlay from "../UI/Overlay";
import useWindowWidth from "../../hooks/use-window-width";
import classes from "./Navigation.module.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false); // Checks if the hamburger menu is open
  const windowWidth = useWindowWidth();

  function changeHamburgerHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={classes.navigation}>
      <a className={classes.logo} href="#hero">
        KZ
      </a>
      {windowWidth > 768 && <NavigationLinks />}
      {windowWidth <= 768 && (
        <Hamburger onChangeHamburger={changeHamburgerHandler} isOpen={isOpen} />
      )}
      {windowWidth <= 768 && (
        <Menu isOpen={isOpen} onCloseMenu={changeHamburgerHandler} />
      )}
      {windowWidth <= 768 && (
        <Overlay isOpen={isOpen} onCloseMenu={changeHamburgerHandler} />
      )}
    </nav>
  );
}
