import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LoginRegister from './pages/LoginRegister';
import FAQ from './pages/FAQ';
import routesByRole from './routes';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import PublicLayout from './layouts/PublicLayout';
import RequestCollect from './dashboard/client/RequestCollect';

function App() {
  return (
    <div>
      <Routes>
        {/* Public Pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          {/* Supprimer la route "À propos" */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<LoginRegister />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>

        {/* Protected Dashboard Pages */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {routesByRole}
        </Route>

        {/* Client Request Collect Page */}
        <Route path="/client/demande" element={<RequestCollect />} />

        {/* Fallback for Undefined Routes */}
        <Route
          path="*"
          element={
            <div className="p-10 text-center text-red-500">
              Page non trouvée
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;