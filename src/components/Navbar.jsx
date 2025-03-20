import React from "react";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Habitis Trackers </div>
      <ul className="nav-links">
        <li><a href="#">xxxxx</a></li>
        <li><a href="#">xxxxx</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
