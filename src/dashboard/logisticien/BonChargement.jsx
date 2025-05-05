import React, { useState } from 'react';

const BonChargement = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem({ name: '', quantity: '' });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/bon-chargement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });
      if (response.ok) {
        alert('Bon de chargement généré avec succès.');
        setItems([]);
      } else {
        alert('Erreur lors de la génération du bon de chargement.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue.');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Bon de chargement</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nom de l'équipement"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Quantité"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAddItem}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Ajouter
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="p-2 border rounded bg-gray-50">
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Générer le bon de chargement
      </button>
    </div>
  );
};

export default BonChargement;
