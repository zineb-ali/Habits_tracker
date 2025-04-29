<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Schedule from "./components/Schedule";
import MotivationSection from "./components/MotivationSection";
import Footer from "./components/Footer";
import NewHabitForm from "./components/NewHabitForm";
import BadHabits from "./components/BadHabits";
import Inscription from "./components/Inscription"; // ✅ page à créer
import Calendar from "./components/Calendar";
import Streaks from "./components/Streaks";
import Heatmap from "./components/Heatmap";
import DailyAverageChart from "./components/DailyAverageChart";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Schedule  />
     <div>
     <div style={{ textAlign: "center", padding: "2rem" }}>
  <h1>Stay Empowered by<br />Your Progress</h1>
  <h4>
    Scientific studies show that tracking your progress can significantly boost your chances of successfully building and maintaining habits.
    <br />
    Fuel your journey with insightful metrics, celebrate your milestones, and stay motivated on your path to success.
  </h4>
</div>

          <Calendar />
          <Streaks />
          <Heatmap />
          <DailyAverageChart />
          </div>
          <Testimonials/>
      <Footer />
      <NewHabitForm />
      <BadHabits />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription" element={<Inscription />} /> {/* Page d'inscription */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
=======
import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true); 

  const handleSignIn = (credentials) => {
    console.log("Sign In avec :", credentials);
    
  };

  const handleSignUp = (credentials) => {
    console.log("Sign Up avec :", credentials);
  };

  return (
    <div className="App">
      <h1>{isLogin ? "Connexion" : "Inscription"}</h1>
      {isLogin ? (
        <SignIn onSignIn={handleSignIn} />
      ) : (
        <SignUp onSignUp={handleSignUp} />
      )}
      <p>
        {isLogin ? "Pas de compte ? " : "Déjà un compte ? "}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Créer un compte" : "Se connecter"}
        </button>
      </p>
    </div>
  );
}

export default App;
>>>>>>> amie/main
