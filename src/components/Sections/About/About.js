import React from "react";

import classes from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={classes.about}>
      <h2 className={classes.header}>About Me</h2>
      <div className={classes["description-container"]}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          minus nam itaque, adipisci ipsam incidunt! Error commodi voluptatum
          repudiandae, eum, pariatur repellat molestias explicabo corrupti
          mollitia doloremque voluptatem velit cupiditate.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus,
          velit recusandae! Exercitationem nesciunt eius accusantium aliquam
          quis qui, dolorem ex quod iusto veritatis, sunt unde alias ab eveniet
          tenetur reiciendis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          quasi, fugit nemo accusantium tempore maiores pariatur debitis numquam
          ea ad!
        </p>
      </div>
    </section>
  );
}
