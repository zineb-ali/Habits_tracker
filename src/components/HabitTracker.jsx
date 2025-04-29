import { useState } from "react";
import { FaPlus, FaCalendar, FaSort } from "react-icons/fa";

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [order, setOrder] = useState("croissant");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  // Trier les habitudes
  const sortedHabits = [...habits].sort((a, b) =>
    order === "croissant" ? a.localeCompare(b) : b.localeCompare(a)
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barre latérale */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <li className="p-2 bg-blue-500 text-white rounded-md mb-2">Soir</li>
          <li className="p-2 hover:bg-gray-200 rounded-md cursor-pointer">Toutes</li>
        </ul>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-6">
        {/* Barre supérieure */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Soir</h1>
          <div className="flex space-x-4">
            {/* Sélecteur de date */}
            <div className="flex items-center bg-white p-2 rounded-md shadow-md">
              <FaCalendar className="text-gray-500 mr-2" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="outline-none bg-transparent"
              />
            </div>

            {/* Sélecteur d'ordre */}
            <div className="flex items-center bg-white p-2 rounded-md shadow-md">
              <FaSort className="text-gray-500 mr-2" />
              <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                className="outline-none bg-transparent"
              >
                <option value="croissant">Croissant</option>
                <option value="décroissant">Décroissant</option>
              </select>
            </div>

            {/* Bouton Ajouter */}
            <button
              onClick={() => setHabits([...habits, `Habitude ${habits.length + 1}`])}
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
            >
              <FaPlus className="mr-2" />
              Ajouter
            </button>
          </div>
        </div>

        {/* Liste des habitudes */}
        {habits.length === 0 ? (
          <p className="text-center text-gray-600">Ajoutez vos premières habitudes !</p>
        ) : (
          <ul>
            {sortedHabits.map((habit, index) => (
              <li key={index} className="p-3 bg-white shadow-md rounded-md mb-2">
                {habit}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
