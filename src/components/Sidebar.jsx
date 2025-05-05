import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const Sidebar = () => {
  const { user } = useAuth();

  const menus = [
    { label: 'Demande de collecte', path: '/dashboard/client/demande', permission: 'soumettre_collecte' },
    { label: 'Mes rapports', path: '/dashboard/client/rapports', permission: 'consulter_rapport' },
    { label: 'Collectes assignées', path: '/dashboard/logisticien/collectes', permission: 'collecter' },
    { label: 'Bon de chargement', path: '/dashboard/logisticien/bon', permission: 'generer_bon_chargement' },
    { label: 'Triage', path: '/dashboard/technicien/tri', permission: 'trier' },
    { label: 'Rapports de tri', path: '/dashboard/technicien/rapports', permission: 'creer_rapport' },
    { label: 'Enregistrer déchets', path: '/dashboard/technicien/enregistrer', permission: 'enregistrer_dechets' },
    { label: 'Utilisateurs', path: '/dashboard/admin/utilisateurs', permission: 'gerer_tout' },
    { label: 'Collectes globales', path: '/dashboard/admin/collectes', permission: 'gerer_tout' },
    { label: 'Configurer données', path: '/dashboard/admin/configurer', permission: 'configurer_donnees' },
    { label: 'Valider demandes', path: '/dashboard/manager/validations', permission: 'valider_formulaires' },
    { label: 'Valider collectes', path: '/dashboard/manager/collectes', permission: 'valider_collectes' },
    { label: 'Valider rapports', path: '/dashboard/manager/rapports', permission: 'valider_rapports' },
  ];

  const filteredMenus = useMemo(() => {
    return menus.filter(menu => user?.permissions?.includes(menu.permission));
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [user]);

  return (
    <aside className="w-64 bg-gray-800 text-gray-300 h-screen p-4 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-teal-400">Dashboard</h2>
      <nav className="space-y-3">
        {filteredMenus.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-teal-400"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
