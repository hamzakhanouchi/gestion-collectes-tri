import React from 'react';

const DashboardClient = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Tableau de bord Client</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Demandes en cours</h3>
          <p>Consultez vos demandes de collecte en attente.</p>
        </div>
        <div className="p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold">Rapports</h3>
          <p>Accédez à vos rapports de collecte.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
