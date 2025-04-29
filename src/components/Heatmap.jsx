import React from "react";
import '../styles/Heatmap.css'; // Assurez-vous d'importer le fichier CSS

export default function Heatmap() {
  const months = [
    { name: "JAN", days: 31 },
    { name: "FEB", days: 28 },
    { name: "MAR", days: 31 },
    { name: "APR", days: 30 },
  ];

  return (
    <div className="heatmap-container">
      <h2 className="heatmap-title">2025</h2>
      <div className="heatmap-grid">
        {months.map((month) => (
          <div key={month.name} className="month-container">
            <div className="month-label">{month.name}</div>
            <div className="days-grid">
              {Array(month.days).fill(null).map((_, i) => (
                <div
                  key={i}
                  className={`day ${
                    Math.random() > 0.5 ? "day-filled" : "day-empty"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
