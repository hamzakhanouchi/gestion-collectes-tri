import React from 'react';
import { Route } from 'react-router-dom';

// Pages de test (tu les créeras après)
const Dummy = ({ title }) => <div>{title}</div>;

const routesByRole = [
  // Client
  <Route key="c1" path="client/demande" element={<Dummy title="Formulaire de demande de collecte" />} />,
  <Route key="c2" path="client/rapports" element={<Dummy title="Mes rapports de collecte" />} />,

  // Logisticien
  <Route key="l1" path="logisticien/collectes" element={<Dummy title="Collectes assignées" />} />,
  <Route key="l2" path="logisticien/bon" element={<Dummy title="Bon de chargement" />} />,

  // Technicien
  <Route key="t1" path="technicien/tri" element={<Dummy title="Triage des équipements" />} />,
  <Route key="t2" path="technicien/rapports" element={<Dummy title="Rapports de tri" />} />,

  // Manager
  <Route key="m1" path="manager/validations" element={<Dummy title="Validation des demandes" />} />,
  <Route key="m2" path="manager/rapports" element={<Dummy title="Validation des rapports" />} />,

  // Admin
  <Route key="a1" path="admin/utilisateurs" element={<Dummy title="Gestion des utilisateurs" />} />,
  <Route key="a2" path="admin/collectes" element={<Dummy title="Vue globale des collectes" />} />,
];

export default routesByRole;
