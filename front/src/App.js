import React from "react";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Home from "./components/Home";

function App() {
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
