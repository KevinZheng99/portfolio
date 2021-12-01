import React from "react";

import ProjectContainer from "./ProjectContainer";
import moist from "../../../images/moist_esports.png";
import crunchyroll from "../../../images/crunchyroll.png";
import computron from "../../../images/computron.png";
import classes from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={classes["projects-section"]}>
      <h2 className={classes.header}>Things I've Built</h2>
      <div className={classes["projects-container"]}>
        <ProjectContainer projectImage={computron} />
        <ProjectContainer projectImage={moist} />
        <ProjectContainer projectImage={crunchyroll} />
      </div>
    </section>
  );
}
