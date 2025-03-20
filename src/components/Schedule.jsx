import React from "react";
import "./../styles/Schedule.css";


const Schedule = () => {
  const schedules = [
    {
      title: "Matin",
      color: "#007bff",
      tasks: [
        { name: "🏃‍♂️Courir", time: "8 AM" },
        { name: "🧘‍♂️Méditer", time: "8:30 AM" },
        { name: "📝Planifier la journée", time: "9 AM" },
        { name: "📖Lire", time: "10 AM" },
        { name: "💧S'hydrater", time: "10:30 AM" },
      ],
    },
    {
      title: "Midi",
      color: "#ff6600",
      tasks: [
        { name: "🥗 Déjeuner sain", time: "12 PM" },
        { name: "🤝 Échanger avec un collègue", time: "2 PM" },
        { name: "🙏 Exprimer de la gratitude", time: "4 PM" },
      ],
    },
    {
      title: "Soir",
      color: "#8000ff",
      tasks: [
        { name: "🧐 Réfléchir ", time: "8 PM" },
        { name: "🌙 Se détendre", time: "9 PM" },
        { name: "📵 Se déconnecter des écrans", time: "9:30 PM" },
        { name: "🎯 Préparer le lendemain", time: "10 PM" },
      ],
    },
  ];

  return (
    <div className="schedule-container">
      <h1>Organisez, Exécutez, Triomphez</h1>
      <p>
      Commencez votre journée du bon pied avec un emploi du temps clair et structuré qui vous garde sur la voie du succès. Voici un exemple de ce à quoi votre journée avec Habitify pourrait ressembler :
      </p>
      <div className="schedule-grid">
        {schedules.map((schedule, index) => (
          <div className="schedule-column" key={index} style={{ borderColor: schedule.color }}>
            <h2 style={{ backgroundColor: schedule.color }}>{schedule.title}</h2>
            {schedule.tasks.map((task, idx) => (
              <div className="task-card" key={idx}>
                <p className="task-name">{task.name}</p>
                <p className="task-time">{task.time}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
