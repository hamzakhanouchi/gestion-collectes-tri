import React from 'react';

const DashboardLogisticien = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Tableau de bord Logisticien</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Collectes planifiées</h3>
          <p>Consultez les collectes planifiées.</p>
        </div>
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Résumé des collectes</h3>
          <p>Obtenez un aperçu des collectes effectuées.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardLogisticien;
