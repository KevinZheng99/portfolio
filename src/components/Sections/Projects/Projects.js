import React from "react";

import ProjectContainer from "./ProjectContainer";
import classes from "./Projects.module.css";

import moist from "../../../images/moist_esports.png";
import crunchyroll from "../../../images/crunchyroll.png";
import computron from "../../../images/computron.png";

const projectsArray = [
  {
    image: computron,
    name: "Computron",
    demoLink: "https://computrondevteam.itch.io/computron2-0",
    codeLink: "https://github.com/wdskiles/Computron-2.0-Builds",
  },
  {
    image: moist,
    name: "Moist Esports Landing Page",
    demoLink: "https://moist-esports-kz.netlify.app/",
    codeLink: "https://github.com/KevinZheng99/Moist-Esports-Landing-Page",
  },
  {
    image: crunchyroll,
    name: "Crunchyroll Landing Page",
    demoLink: "https://crunchyroll-landing-page-kz.netlify.app/",
    codeLink: "https://github.com/KevinZheng99/Crunchyroll-Landing-Page",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={classes["projects-section"]}>
      <h2 className={classes.header}>Things I've Built</h2>
      <div className={classes["projects-container"]}>
        {projectsArray.map((project) => {
          return (
            <ProjectContainer
              key={Math.random()}
              projectImage={project.image}
              title={project.name}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          );
        })}
      </div>
    </section>
  );
}
