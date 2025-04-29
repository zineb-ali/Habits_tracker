import React from "react";
import "../styles/MotivationSection.css"; // Importation du fichier CSS

const MotivationSection = () => {
  return (
    <div className="motivation-container">
      <div className="icon">🏆</div>
      <h2 className="title">
        Pourquoi attendre pour <br /> transformer votre vie ?
      </h2>
      <p className="description">
        Rejoignez plus de 2 millions de personnes qui prennent le contrôle de
        leurs habitudes et construisent une vie meilleure avec Habitify. Que
        votre objectif soit d'améliorer votre productivité, votre forme physique,
        ou simplement de créer des habitudes plus saines, Habitify a tout ce
        dont vous avez besoin pour y parvenir.
      </p>
    </div>
  );
};

export default MotivationSection;
