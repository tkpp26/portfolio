import React, { useEffect, useRef, useState } from "react";
import "../stylings/Contact.css";
import cuteGif from "../assets/contact/cute.webp";

export default function Contact() {
  const [status, setStatus] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && rootRef.current?.classList.add("visible")
        );
      },
      { threshold: 0.1 }
    );
    if (rootRef.current) obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    const { name, email, message } = e.target;
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value.trim(),
          email: email.value.trim(),
          message: message.value.trim(),
        }),
      });
      setStatus(res.ok ? "ok" : "err");
      if (res.ok) e.target.reset();
    } catch {
      setStatus("err");
    }
  };

  return (
    <section
      id="contact"
      className="ct-wrap"
      ref={rootRef}
      aria-labelledby="contact-title"
    >
      <header className="ct-heading">
        <h2 id="contact-title">Contact Me</h2>
        <p className="ct-sub">Let’s build something lovely together ✨</p>
      </header>

      {/* Two separate cards (not inside one big div) */}
      <div className="ct-grid">
        {/* Form card */}
        <form className="ct-card ct-formCard" onSubmit={handleSubmit}>
          <div className="ct-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div className="ct-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="ct-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />
          </div>

          <button className="ct-submit" type="submit">
            Send
          </button>

          {status === "ok" && (
            <p className="ct-status ok">Thanks! Your message was sent 💌</p>
          )}
          {status === "err" && (
            <p className="ct-status err">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* Gif card (separate) */}
        <aside className="ct-card ct-gifCard" aria-hidden="true">
          <div className="gif-canvas">
            <img src={cuteGif} alt="" className="gif-img" loading="lazy" />
          </div>
        </aside>
      </div>
    </section>
  );
}
