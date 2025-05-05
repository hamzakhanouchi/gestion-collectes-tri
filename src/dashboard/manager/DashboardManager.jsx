import React from 'react';

const DashboardManager = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Tableau de bord Manager</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Validations en attente</h3>
          <p>Consultez les demandes et rapports en attente de validation.</p>
        </div>
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Statistiques</h3>
          <p>Analysez les statistiques des collectes et tris.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardManager;
