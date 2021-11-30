import React from "react";

import PersonalLinks from "./PersonalLinks";
import useWindowWidth from "../../hooks/use-window-width";
import classes from "./Hero.module.css";

export default function Hero() {
  const width = useWindowWidth();

  return (
    <div id="hero" className={classes.hero}>
      <div>
        <div>Hi, my name is</div>
        <div className={classes.name}>Kevin Zheng</div>
        <div className={classes.description}>
          I'm a front-end developer based in Orlando, FL. Contact me to create
          something special together.
        </div>
        {width <= 768 && <PersonalLinks />}
      </div>
      {width > 768 && <PersonalLinks />}
    </div>
  );
}
