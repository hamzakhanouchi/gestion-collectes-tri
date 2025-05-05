import React, { useState } from 'react';

const TriDechets = () => {
  const [equipments, setEquipments] = useState([]);
  const [newEquipment, setNewEquipment] = useState({ name: '', weight: '', state: '' });

  const handleAddEquipment = () => {
    setEquipments([...equipments, newEquipment]);
    setNewEquipment({ name: '', weight: '', state: '' });
  };

  const handleGenerateReport = () => {
    console.log('Rapport généré :', equipments);
    alert('Rapport PDF généré et attaché à la collecte.');
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Tri des déchets</h2>
      <div className="space-y-4">
        {/* Section pour ajouter un équipement */}
        <input
          type="text"
          placeholder="Nom de l'équipement"
          value={newEquipment.name}
          onChange={(e) => setNewEquipment({ ...newEquipment, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Poids (kg)"
          value={newEquipment.weight}
          onChange={(e) => setNewEquipment({ ...newEquipment, weight: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <select
          value={newEquipment.state}
          onChange={(e) => setNewEquipment({ ...newEquipment, state: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="">État</option>
          <option value="fonctionnel">Fonctionnel</option>
          <option value="non fonctionnel">Non fonctionnel</option>
        </select>
        <button
          onClick={handleAddEquipment}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Ajouter
        </button>
      </div>
      {/* Section pour afficher la liste des équipements */}
      <ul className="mt-4 space-y-2">
        {equipments.map((equipment, index) => (
          <li key={index} className="p-2 border rounded bg-gray-50">
            {equipment.name} - {equipment.weight}kg - {equipment.state}
          </li>
        ))}
      </ul>
      {/* Section pour générer le rapport */}
      <button
        onClick={handleGenerateReport}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Générer le rapport
      </button>
    </div>
  );
};

export default TriDechets;
