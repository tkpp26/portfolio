// Introduction.js
import React, { useEffect, useRef, useState } from "react";
import "../stylings/Introduction.css";

export default function Introduction() {
  const [visible, setVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <div className={`introduction ${visible ? "visible" : ""}`} ref={introRef}>
      <h1>Hi, I am Shizuka</h1>
      <p>Welcome to my portfolio!</p>
    </div>
  );
}
