import React from "react";
import { Header } from "components/Header";
import { About } from "components/About";
import { Tech } from "components/Tech";
import { Projects } from "components/Projects";
import { Article } from "components/Articles";
import { Skills } from "components/Skills";

export const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Tech />
      <Projects />
      <Article />
      <Skills />
    </div>
  );
};
