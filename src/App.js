import { Fragment } from "react";

import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Sections/Hero/Hero";
import About from "./components/Sections/About/About";
import "./App.module.css";
import Projects from "./components/Sections/Projects/Projects";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </Fragment>
  );
}

export default App;
