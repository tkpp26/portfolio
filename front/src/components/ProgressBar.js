import React, { useEffect, useRef, useState } from "react";
import "../stylings/ProgressBar.css";

const ProgressBar = ({ language, level }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div className="progress-bar" ref={progressRef}>
      <div className="progress-bar-language">{language}</div>
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: isVisible ? `${level}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
