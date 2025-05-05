import React from 'react';

const DashboardTechnicien = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Tableau de bord Technicien</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Équipements triés</h3>
          <p>Consultez les équipements triés récemment.</p>
        </div>
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Rapports générés</h3>
          <p>Accédez aux rapports de tri générés.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardTechnicien;
