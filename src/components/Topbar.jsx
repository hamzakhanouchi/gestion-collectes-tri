import React from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-gray-800 text-teal-400 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-lg font-semibold">Bienvenue, {user?.role}</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Déconnexion
      </button>
    </header>
  );
};

export default Topbar;
