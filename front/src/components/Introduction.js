import React, { useEffect, useState, useRef } from "react";
import "../stylings/Introduction.css";

export default function Introduction() {
  const [index, setIndex] = useState(0); // State to track the index
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const typingRef = useRef(null); // Reference to the h1 element
  const cardRef = useRef(null); // Reference to the card element
  const text = "Hi, I'm Shizuka"; // Text to display

  useEffect(() => {
    // Typing function
    const type = () => {
      if (index < text.length) {
        typingRef.current.textContent += text.charAt(index); // Append next character
        setIndex((prevIndex) => prevIndex + 1); // Increment index
      }
    };

    const typingTimeout = setTimeout(type, 100); // Call type function after delay

    // Cleanup function
    return () => {
      clearTimeout(typingTimeout); // Clear the timeout if component unmounts
    };
  }, [index]); // Depend on index to update the effect

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Optionally stop observing after becoming visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="introduction">
      <div ref={cardRef} className={`card ${isVisible ? "visible" : ""}`}>
        <h1 ref={typingRef}></h1> {/* Ref to access the h1 element */}
      </div>
    </div>
  );
}
