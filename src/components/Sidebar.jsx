import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Sidebar = () => {
  const { user } = useAuth();

  const menus = {
    client: [
      { label: 'Demande de collecte', path: '/dashboard/client/demande' },
      { label: 'Mes rapports', path: '/dashboard/client/rapports' },
    ],
    logisticien: [
      { label: 'Collectes assignées', path: '/dashboard/logisticien/collectes' },
      { label: 'Bon de chargement', path: '/dashboard/logisticien/bon' },
    ],
    technicien: [
      { label: 'Triage', path: '/dashboard/technicien/tri' },
      { label: 'Rapports de tri', path: '/dashboard/technicien/rapports' },
    ],
    manager: [
      { label: 'Valider demandes', path: '/dashboard/manager/validations' },
      { label: 'Valider rapports', path: '/dashboard/manager/rapports' },
    ],
    admin: [
      { label: 'Utilisateurs', path: '/dashboard/admin/utilisateurs' },
      { label: 'Collectes globales', path: '/dashboard/admin/collectes' },
    ]
  };

  const items = menus[user?.role] || [];

  return (
    <aside className="w-64 bg-green-700 text-white h-screen p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-3">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-4 py-2 rounded hover:bg-green-600"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
