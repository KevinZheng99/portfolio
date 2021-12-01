import React from "react";

import classes from "./ProjectContainer.module.css";

export default function ProjectContainer(props) {
  return (
    <div className={classes.container}>
      <img src={props.projectImage} alt={`${props.projectImage}`} />
    </div>
  );
}
