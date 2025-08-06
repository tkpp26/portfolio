import React from "react";
import Navbar from "./Navbar";
import "../stylings/Home.css";
import Introduction from "./Introduction";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Experience />
      <Portfolio />
    </>
  );
}
