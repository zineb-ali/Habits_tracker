import React from "react";
import Navbar from "./components/Navbar";


import HeroSection from "./components/HeroSection";
import Testimonials from "./components/Testimonials";
import "./index.css";
import Schedule from "./components/Schedule";
import MotivationSection from "./components/MotivationSection";
import Footer from "./components/Footer";
import NewHabitForm from "./components/NewHabitForm";


function App() {
  return (
    <div>
      <Navbar />
     
      <HeroSection />
      <Schedule/>
      <Testimonials />
      <MotivationSection/>
      <Footer/>
     <  NewHabitForm/>
      
    </div>
  );
}

export default App;
