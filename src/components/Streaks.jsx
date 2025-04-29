import React from "react";
import "../styles/Streaks.css";  // Vérifie bien que ce fichier existe et est importé correctement

export default function Streaks() {
  const data = [
    { start: "Dec 12", days: 155, end: "July 8" },
    { start: "Dec 12", days: 56, end: "July 8" },
    { start: "Dec 12", days: 2, end: "July 8" },
    { start: "Dec 12", days: 1, end: "July 8" },
    { start: "Dec 12", days: 431, end: "July 8" },
  ];

  return (
    <div className="streaks-container">
      <h2 className="font-semibold text-lg mb-2">Streaks</h2>
      {data.map((item, index) => (
        <div key={index} className="streak">
          <div className="start-end">{item.start} - {item.end}</div>
          <div className="bar" style={{ width: `${item.days / 4}px` }}></div>
          <span>{item.days} days</span>
        </div>
      ))}
    </div>
  );
}
