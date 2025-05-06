// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">
          Bienvenue sur notre plateforme de gestion des collectes et du triage des déchets
        </h1>
        <p className="text-gray-700 text-center">
          Suivez vos collectes et triez vos équipements en toute simplicité.
        </p>
      </div>
    </div>
  );
};

export default Home;
