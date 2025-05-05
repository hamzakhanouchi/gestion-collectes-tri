import React, { useState } from 'react';

const RequestCollect = () => {
  const [form, setForm] = useState({
    dateSouhaitee: '',
    typeCollecte: '',
    contenuEstime: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = { ...form, status: 'en attente' };
    try {
      const response = await fetch('/api/collects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });
      if (response.ok) {
        alert('Votre demande a été soumise avec succès et est en attente.');
        setForm({ dateSouhaitee: '', typeCollecte: '', contenuEstime: '' });
      } else {
        alert('Erreur lors de la soumission de la demande.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue.');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Demande de collecte</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="date"
          name="dateSouhaitee"
          value={form.dateSouhaitee}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="typeCollecte"
          placeholder="Type de collecte"
          value={form.typeCollecte}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="contenuEstime"
          placeholder="Contenu estimé (ex : 3 PC, 2 serveurs)"
          value={form.contenuEstime}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default RequestCollect;
