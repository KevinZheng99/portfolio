import React from "react";

import classes from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={classes.about}>
      <h2 className={classes.header}>About Me</h2>
      <div className={classes["description-container"]}>
        <p>
          I love creating things with the programming skills that I have and
          hosting it on the web for others to interact with. My passion for
          development started in 2016 when I was on YouTube watching game
          developers single handily create well polished games.
        </p>
        <p>
          Going into my college career I knew that I wanted to major in Computer
          Science. I wanted to become like those YouTubers that built games by
          themselves. That's why for my senior design project I selected a
          sponsor that wanted to create a video game. I loved the process of
          making games, but during this time I started to take more of a liking
          to frontend development.
        </p>
        <p>
          Fast-forward to today after graduating college I started to study more
          about frontend development, which then I used to build landing pages
          using HTML, CSS, and JS.
        </p>
      </div>
    </section>
  );
}
