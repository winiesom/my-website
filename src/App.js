import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./components/landingPage/LandingPage";
import Jobs from "./components/portfolio/Jobs";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<LandingPage />} />
            <Route path="portfolio" element={<Jobs />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
};

export default App;
