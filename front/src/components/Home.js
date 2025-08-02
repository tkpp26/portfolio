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
      <div className="floating-elements">
        <div className="floating-star" style={{top: '10%', left: '5%', animationDelay: '0s'}}>✨</div>
        <div className="floating-flower" style={{top: '20%', right: '10%', animationDelay: '2s'}}>🌸</div>
        <div className="floating-clover" style={{bottom: '30%', left: '8%', animationDelay: '4s'}}>☘️</div>
        <div className="floating-star" style={{bottom: '15%', right: '15%', animationDelay: '1s'}}>⭐</div>
        <div className="floating-flower" style={{top: '60%', left: '15%', animationDelay: '3s'}}>🌸</div>
        <div className="floating-clover" style={{top: '40%', right: '5%', animationDelay: '5s'}}>☘️</div>
      </div>
      <Navbar />
      <Introduction />
      <About />
      <Experience />
      <Portfolio />
    </>
  );
}
