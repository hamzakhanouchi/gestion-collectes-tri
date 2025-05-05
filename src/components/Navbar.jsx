import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/images.png" alt="Logo" className="h-10 w-10 rounded-full border-2 border-teal-400" />
        <Link to="/" className="text-3xl font-bold text-teal-400">
          Collecte & Tri
        </Link>
      </div>
      <div className="space-x-6 text-lg">
        <Link to="/contact" className="text-gray-300 hover:text-teal-400">
          Contact
        </Link>
        <Link to="/faq" className="text-gray-300 hover:text-teal-400">
          FAQ
        </Link>
        <Link to="/login" className="bg-teal-500 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-teal-600">
          Connexion
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
