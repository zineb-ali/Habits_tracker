import React from "react";
import "../styles/MotivationSection.css"; // Importation du fichier CSS

const MotivationSection = () => {
  return (
    <div className="motivation-container">
      <div className="icon">🏆</div>
      <h2 className="title">
        Why Wait to <br /> Transform Your Life?
      </h2>
      <p className="description">
        Join over 2 million people who are taking control of their habits and
        building a better life with Habitify. Whether your aim is to enhance
        productivity, improve fitness, or simply form healthier daily habits,
        Habitify has everything you need to make it happen.
      </p>
    </div>
  );
};

export default MotivationSection;
