import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../stylings/Introduction.css";
import selfImg from "../assets/self_img.jpg";

export default function Introduction() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    linksCard: false,
  });
  const typingRef = useRef(null);
  const heroRef = useRef(null);
  const linksCardRef = useRef(null);
  const text = "Hi, I'm Shizuka";

  useEffect(() => {
    const type = () => {
      if (index < text.length) {
        typingRef.current.textContent += text.charAt(index);
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    const typingTimeout = setTimeout(type, 100);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [index]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;
            if (target === heroRef.current) {
              setIsVisible((prev) => ({ ...prev, hero: true }));
            } else if (target === linksCardRef.current) {
              setIsVisible((prev) => ({ ...prev, linksCard: true }));
            }
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    if (linksCardRef.current) {
      observer.observe(linksCardRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
      if (linksCardRef.current) {
        observer.unobserve(linksCardRef.current);
      }
    };
  }, []);

  return (
    <div id="intro" className="introduction">
      {/* Hero Section with Image and Text */}
      <div
        ref={heroRef}
        className={`hero-section ${isVisible.hero ? "visible" : ""}`}
      >
        <div className="profile-image-container">
          <div className="profile-image-wrapper">
            <img
              src={selfImg}
              alt="Shizuka Takao - Profile"
              className="profile-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div className="hero-text">
          <div className="typing-container">
            <h1 ref={typingRef}></h1>
          </div>
          <p className="intro-subtitle">
            Full-Stack Developer & Problem Solver
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div
        ref={linksCardRef}
        className={`links-container ${isVisible.linksCard ? "visible" : ""}`}
      >
        <div className="links-card">
          <div className="links">
            <a
              href="https://www.linkedin.com/in/shizukatakao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              LinkedIn
            </a>
            <a
              href="https://github.com/tkpp26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
              GitHub
            </a>
            <a
              href="/ShizukaTakao.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFileAlt} className="icon" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
