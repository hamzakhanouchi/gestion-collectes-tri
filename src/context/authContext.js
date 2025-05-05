import React, { createContext, useContext, useState } from 'react';

const authContext = createContext();

const rolesPermissions = {
  client: ["soumettre_collecte", "consulter_rapport", "modifier_demande", "annuler_demande"],
  logisticien: ["collecter", "generer_bon_chargement", "planifier_collecte", "mettre_a_jour_statut"],
  technicien: ["trier", "enregistrer_dechets", "creer_rapport", "mettre_a_jour_inventaire"],
  admin: ["gerer_tout", "valider", "configurer_donnees", "ajouter_utilisateur", "supprimer_utilisateur"],
  manager: ["valider_formulaires", "valider_collectes", "valider_rapports", "consulter_statistiques", "generer_rapports"],
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Exemple : { name, role, permissions }

  // Fonction de connexion
  const login = (userData) => {
    const permissions = rolesPermissions[userData.role] || [];
    setUser({ ...userData, permissions });
  };

  // Fonction de déconnexion
  const logout = () => {
    setUser(null);
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
