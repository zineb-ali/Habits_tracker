import React, { useState, useEffect } from 'react';
import '../styles/BadHabits.css';
import { YAxis } from 'recharts';

function BadHabits() {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  });
  const [startTime, setStartTime] = useState('12:00');
  const [showIcons, setShowIcons] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const iconList = [
    { emoji: '🍔', label: 'Fast Food' },
    { emoji: '🥤', label: 'Soda' },
    { emoji: '🍬', label: 'Sucre' },
    { emoji: '🚬', label: 'Tabac' },
    { emoji: '🍷', label: 'Alcool' },
    { emoji: '🧠', label: 'Rumination' },
    { emoji: '🛍️', label: 'Shopping' },
    { emoji: '📱', label: 'Téléphone' },
    { emoji: '📺', label: 'Netflix' },
    { emoji: '💄', label: 'Maquillage' },
    { emoji: '💇‍♀️', label: 'Coiffure' },
    { emoji: '💸', label: 'Dépenses' },
    { emoji: '🌙', label: 'Sommeil tardif' },
  ];

  const toggleIcons = () => setShowIcons(!showIcons);

  const handleIconClick = (icon) => setSelectedIcon(icon);

  const notify = () => {
    if (Notification.permission === 'granted') {
      new Notification('⏰ Rappel d’habitude', {
        body: `Il est temps de gérer votre habitude : ${name || 'Mauvaise habitude'}`,
        icon: '/favicon.ico',
      });
    }
  };

  useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {
      const now = new Date();
      const habitTime = new Date(`${startDate}T${startTime}`);
      if (
        now.getFullYear() === habitTime.getFullYear() &&
        now.getMonth() === habitTime.getMonth() &&
        now.getDate() === habitTime.getDate() &&
        now.getHours() === habitTime.getHours() &&
        now.getMinutes() === habitTime.getMinutes()
      ) {
        notify();
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [startDate, startTime, name]);

  return (
    <div className="form-container">
      <h2>Nouvelle mauvaise habitude</h2>

      <div className="top-buttons">
        <button className="btn-light">Arrêter</button>
        <button className="btn-light">Limiter</button>
      </div>

      <label htmlFor="habit-name">Nom</label>
      <div className="input-wrapper">
        <input
          id="habit-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Entrez le nom d'une mauvaise habitude..."
        />
        <button className="type-btn" onClick={toggleIcons}>Types</button>
      </div>

      {showIcons && (
        <div className="icon-list">
          {iconList.map((icon, idx) => (
            <div
              key={idx}
              title={icon.label}
              onClick={() => handleIconClick(icon)}
              className={selectedIcon?.emoji === icon.emoji ? 'selected' : ''}
            >
              {icon.emoji}
            </div>
          ))}
        </div>
      )}

      <label>Date de début</label>
      <div className="input-wrapper">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <label>Heure</label>
      <div className="input-wrapper">
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>

      <div className="button-row">
        <button className="btn-light">Annuler</button>
        <button className="btn-blue" >Sauvegarder</button>
      </div>
    </div>
  );
}

export default BadHabits;











