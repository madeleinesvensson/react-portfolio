import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "components/Header";
import { About } from "pages/About";
import { NotFound } from "pages/NotFound";
import { Projects } from "pages/Projects";
import { Article } from "pages/Articles";
import { Start } from "pages/Start";
import { Contact } from "pages/Contact";
import { Footer } from "components/Footer";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
