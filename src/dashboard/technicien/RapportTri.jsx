import React, { useState } from 'react';

const RapportTri = () => {
  const [report, setReport] = useState([]);
  const [newEntry, setNewEntry] = useState({ name: '', weight: '', state: '' });

  const handleAddEntry = () => {
    setReport([...report, newEntry]);
    setNewEntry({ name: '', weight: '', state: '' });
  };

  const handleGenerateReport = async () => {
    try {
      const response = await fetch('/api/tri-rapport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ report }),
      });
      if (response.ok) {
        alert('Rapport de tri généré avec succès.');
        setReport([]);
      } else {
        alert('Erreur lors de la génération du rapport.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue.');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Rapport de tri</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nom de l'équipement"
          value={newEntry.name}
          onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Poids (kg)"
          value={newEntry.weight}
          onChange={(e) => setNewEntry({ ...newEntry, weight: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <select
          value={newEntry.state}
          onChange={(e) => setNewEntry({ ...newEntry, state: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="">État</option>
          <option value="fonctionnel">Fonctionnel</option>
          <option value="non fonctionnel">Non fonctionnel</option>
        </select>
        <button
          onClick={handleAddEntry}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Ajouter
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {report.map((entry, index) => (
          <li key={index} className="p-2 border rounded bg-gray-50">
            {entry.name} - {entry.weight}kg - {entry.state}
          </li>
        ))}
      </ul>
      <button
        onClick={handleGenerateReport}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Générer le rapport
      </button>
    </div>
  );
};

export default RapportTri;
