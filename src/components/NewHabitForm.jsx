import { useState } from "react";
import "../styles/HabitForm.css";

const daysOfWeekList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsList = [
  "January", "February", "March", "April", "May", "June", "July", "August", 
  "September", "October", "November", "December"
];

export default function NewHabitForm() {
  const [habitName, setHabitName] = useState("");
  const [goal, setGoal] = useState(1);
  const [unit, setUnit] = useState("Times");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [startDate, setStartDate] = useState(new Date().toISOString().split("T")[0]);
  const [frequency, setFrequency] = useState("Per Day");
  const [repeat, setRepeat] = useState("Daily");
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [month, setMonth] = useState("");
  const [interval, setInterval] = useState(1);

  const handleDayToggle = (day) => {
    setDaysOfWeek((prev) => 
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="habit-form-container">
      <h2>New Habit</h2>

      {/* Habit Name */}
      <label htmlFor="habit-name">Name</label>
      <input 
        id="habit-name"
        type="text" 
        value={habitName} 
        onChange={(e) => setHabitName(e.target.value)} 
        placeholder="Enter habit name"
      />

      {/* Goal Selection */}
      <label htmlFor="goal">Goal</label>
      <div className="goal-section">
        <select id="goal" value={goal} onChange={(e) => setGoal(Number(e.target.value))}>
          {[...Array(100)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <select id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="Times">Times</option>
          <option value="Minutes">Minutes</option>
        </select>
        <select id="frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
          <option value="Per Day">Per Day</option>
          <option value="Per Week">Per Week</option>
          <option value="Per Month">Per Month</option>
        </select>
      </div>

      {/* Time of Day & Start Date */}
      {unit === "Times" && (
        <div className="time-date-section">
          <div className="time-of-day">
            <label htmlFor="time-of-day">Time of Day</label>
            <select id="time-of-day" value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)}>
              <option value="">Select time</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div className="start-date">
            <label htmlFor="start-date">Start Date</label>
            <input 
              id="start-date"
              type="date" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)} 
            />
          </div>
        </div>
      )}

      {/* Repeat Options */}
      <label htmlFor="repeat">Repeat</label>
      <select id="repeat" value={repeat} onChange={(e) => setRepeat(e.target.value)}>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>

      {/* If Weekly, select days of the week */}
      {repeat === "Weekly" && (
        <div className="weekly-options">
          {daysOfWeekList.map((day) => (
            <label key={day} htmlFor={day}>
              <input
                id={day}
                type="checkbox"
                checked={daysOfWeek.includes(day)}
                onChange={() => handleDayToggle(day)}
              />
              {day}
            </label>
          ))}
        </div>
      )}

      {/* If Monthly, select a month */}
      {repeat === "Monthly" && (
        <select id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
          {monthsList.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      )}

      {/* Interval Selection */}
      <label htmlFor="interval">Repeat Every</label>
      <select id="interval" value={interval} onChange={(e) => setInterval(Number(e.target.value))}>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>Repeat every {i + 1} days</option>
        ))}
      </select>

      <div className="form-buttons">
        <button className="cancel">Cancel</button>
        <button className="save">Save</button>
      </div>
    </div>
  );
}
