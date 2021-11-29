import React from "react";

import classes from "./NavigationLinks.module.css";

export default function NavigationLinks() {
  return (
    <div>
      <a className={classes["nav-link"]} href="/">
        About
      </a>
      <a className={classes["nav-link"]} href="/">
        Work
      </a>
      <a
        className={`${classes.resume} ${classes["nav-link"]}`}
        href="https://drive.google.com/file/d/1JpjkDmEMNrheMZIcrYN76h6R1VkKq1lf/view"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </div>
  );
}
