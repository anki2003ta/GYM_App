/*import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";

function App() {
  

  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
}

export default App*/


import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";

function App() {
  const pricingRef = useRef(null);

  const handleDiscoverPlanClick = () => {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar />
      <Hero onDiscoverPlanClick={handleDiscoverPlanClick} />
      <WorkoutSessions />
      <Gallery />
      <section ref={pricingRef}>
        <Pricing />
      </section>
      <Contact />
      <BMICalculator />
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
}

export default App;