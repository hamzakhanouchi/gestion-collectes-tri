import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginRegister from './pages/LoginRegister';
import routesByRole from './routes';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import PublicLayout from './layouts/PublicLayout';

function App() {
  return (
    <div>
      <Routes>
        {/* Public Pages */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<LoginRegister />} />
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