import React, { useState, useEffect } from "react";
import '../styles/Calendar.css'; // Assurez-vous que le fichier CSS est correctement importé

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();

  const generateDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">
        {month} {year}
      </h2>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-name">
            {day}
          </div>
        ))}
        
        {Array(firstDayOfMonth).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="calendar-empty"></div> 
        ))}

        {generateDays().map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${currentDate.getDate() === day ? "calendar-day-today" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
