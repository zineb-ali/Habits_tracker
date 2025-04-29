import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Importer le hook
import "../styles/HeroSection.css";

function HeroSection() {
  const navigate = useNavigate(); // ✅ Initialiser le hook

  const handleClick = () => {
    navigate("/inscription"); // ✅ Redirection vers la page d'inscription
  };

  return (
    <div className="hero">
      <h1>Construisez de meilleures habitudes, <br /> Construisez une vie meilleure</h1>
      <p>Exploitez la puissance de notre application de suivi des habitudes personnalisée pour simplifier votre routine quotidienne et atteindre vos objectifs.</p>
      <button className="cta-button" onClick={handleClick}>
        Commencer maintenant
      </button>
    </div>
  );
}

export default HeroSection;
