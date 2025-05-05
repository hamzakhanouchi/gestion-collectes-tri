// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 text-center">
      <p>© 2025 CLT - Gestion des collectes et du triage des déchets</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
          Twitter
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
