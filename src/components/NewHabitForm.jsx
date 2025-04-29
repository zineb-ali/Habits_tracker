import React, { useState } from "react";
import '../styles/HabitForm.css'; // Import du fichier CSS séparé

function NewHabitForm() {
  const [formData, setFormData] = useState({
    nom: "",
    objectif: 1,
    momentDeLaJournee: "",
    dateDebut: "18/04/2025",
    repetition: "Quotidien",
    repetitionInterval: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    alert("Habitude enregistrée!");
  };

  return (
    <div className="habit-form-container">
      <h2>Nouvelle Habitude</h2>
      <form onSubmit={handleSubmit} className="habit-form">
        <label className="habit-form-label">
          Nom
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Entrez le nom de l'habitude"
            required
            className="habit-form-input"
          />
        </label>

        <label className="habit-form-label">
          Objectif
          <input
            type="number"
            name="objectif"
            value={formData.objectif}
            onChange={handleChange}
            min="1"
            max="10"
            required
            className="habit-form-input"
          />
        </label>

        <label className="habit-form-label">
          Moment de la journée
          <select
            name="momentDeLaJournee"
            value={formData.momentDeLaJournee}
            onChange={handleChange}
            required
            className="habit-form-select"
          >
            <option value="">Sélectionner un moment</option>
            <option value="Matin">Matin</option>
            <option value="Midi">Midi</option>
            <option value="Soir">Soir</option>
          </select>
        </label>

        <label className="habit-form-label">
          Date de début
          <input
            type="date"
            name="dateDebut"
            value={formData.dateDebut}
            onChange={handleChange}
            required
            className="habit-form-input"
          />
        </label>

        <label className="habit-form-label">
          Répéter
          <select
            name="repetition"
            value={formData.repetition}
            onChange={handleChange}
            required
            className="habit-form-select"
          >
            <option value="Quotidien">Quotidien</option>
            <option value="Hebdomadaire">Hebdomadaire</option>
            <option value="Mensuel">Mensuel</option>
          </select>
        </label>

        <label className="habit-form-label">
          Répéter tous les
          <input
            type="number"
            name="repetitionInterval"
            value={formData.repetitionInterval}
            onChange={handleChange}
            min="1"
            required
            className="habit-form-input"
          />
          jours
        </label>

        <div className="habit-form-buttons">
          <button type="button" className="habit-form-button cancel-btn">
            Annuler
          </button>
          <button type="submit" className="habit-form-button submit-btn">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewHabitForm;
