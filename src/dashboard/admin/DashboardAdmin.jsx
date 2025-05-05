import React from 'react';

const DashboardAdmin = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Tableau de bord Admin</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Gestion des utilisateurs</h3>
          <p>Ajoutez, modifiez ou supprimez des utilisateurs.</p>
        </div>
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Collectes globales</h3>
          <p>Consultez une vue d'ensemble des collectes.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
