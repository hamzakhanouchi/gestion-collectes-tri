import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 shadow-lg py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold text-white">
        Collecte & Tri
      </Link>
      <div className="space-x-6 text-lg">
        <Link to="/about" className="text-white hover:text-green-200">
          À propos
        </Link>
        <Link to="/contact" className="text-white hover:text-green-200">
          Contact
        </Link>
        <Link to="/login" className="bg-white text-green-600 font-semibold px-4 py-2 rounded hover:bg-green-200">
          Connexion
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
