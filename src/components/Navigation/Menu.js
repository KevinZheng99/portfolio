import React from "react";

import classes from "./Menu.module.css";

export default function Menu(props) {
  return (
    <nav className={`${classes.menu} ${props.isOpen && classes.open}`}>
      <ul>
        <li>
          <a
            className={classes["menu-link"]}
            href="#about"
            onClick={props.onCloseMenu}
          >
            About
          </a>
        </li>
        <li>
          <a
            className={classes["menu-link"]}
            href="#projects"
            onClick={props.onCloseMenu}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={`${classes.resume} ${classes["menu-link"]}`}
            href="https://drive.google.com/file/d/1JpjkDmEMNrheMZIcrYN76h6R1VkKq1lf/view"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
