import React from "react";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Habit Trackers</div>
      <ul className="nav-links">
        
      </ul>
      <div className="auth-buttons">
        <button className="sign-in">Se connecter</button>
        <button className="sign-up">S'inscrire</button>
      </div>
    </nav>
  );
}

export default Navbar;
