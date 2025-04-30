import React from "react";
import "./Sidebar.css"; // Pour le CSS externe

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="initials">Z</div>
        <div className="name">ZINEB AIT BEN ALI</div>
      </div>

      <ul className="menu">
        <li><a href="#">Toutes</a></li>
        <li className="active"><a href="#">Soir</a></li>
      </ul>

      <div className="group">
        <h4>GROUPES</h4>
        <a href="#">+ Nouvelle groupe</a>
      </div>

      <div className="pref">
        <h4>PRÉFÉRENCES</h4>
        <a href="#">Gérer Les Habitudes</a><br />
        <a href="#">Installer L'application</a><br />
        <a href="#">Ressources</a>
      </div>
    </div>
  );
};

export default Sidebar;
