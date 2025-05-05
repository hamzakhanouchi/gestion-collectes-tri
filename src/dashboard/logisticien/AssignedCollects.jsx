import React from 'react';

const AssignedCollects = () => {
  const collects = [
    { id: 1, client: 'Entreprise A', date: '2023-10-01', status: 'En attente' },
    { id: 2, client: 'Entreprise B', date: '2023-10-05', status: 'Planifiée' },
  ];

  const handleValidate = (id) => {
    console.log(`Collecte ${id} validée et planifiée.`);
    alert(`Collecte ${id} validée.`);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Collectes assignées</h2>
      <ul className="space-y-4">
        {collects.map((collect) => (
          <li key={collect.id} className="p-4 border rounded bg-gray-50">
            <p>Client : {collect.client}</p>
            <p>Date : {collect.date}</p>
            <p>Status : {collect.status}</p>
            <button
              onClick={() => handleValidate(collect.id)}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Valider
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignedCollects;
