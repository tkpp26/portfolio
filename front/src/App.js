import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Shizuka Takao - Personal Website</title>
        <meta
          name="description"
          content="Explore Shizuka Takao's personal website. Shizuka is an aspiring software engineer currently learning machine learning and backend development."
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
