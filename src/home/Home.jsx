import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ismail Khan Refat | Full-Stack Developer & AI Researcher</title>
        <meta
          name="description"
          content="Portfolio of Ismail Khan Refat — Full-Stack Web Developer (React, Next.js, Node.js, FastAPI) and Deep Learning Researcher specializing in medical imaging."
        />
      </Helmet>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
};

export default Home;