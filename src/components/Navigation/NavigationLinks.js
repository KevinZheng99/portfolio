import React from "react";

import classes from "./NavigationLinks.module.css";

export default function NavigationLinks() {
  return (
    <ul className={classes["links-container"]}>
      <li>
        <a className={classes["nav-link"]} href="#about">
          About
        </a>
      </li>
      <li>
        <a className={classes["nav-link"]} href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a
          className={`${classes.resume} ${classes["nav-link"]}`}
          href="https://drive.google.com/file/d/1kFGFT7i39uL32K1x2P_JLqMhNNgq18hY/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
