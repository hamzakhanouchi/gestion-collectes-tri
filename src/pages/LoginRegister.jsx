import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const LoginRegister = () => {
  const [tab, setTab] = useState('login');
  const [loginForm, setLoginForm] = useState({ email: '', role: 'client' });
  const [registerForm, setRegisterForm] = useState({
    nomEntreprise: '',
    ice: '',
    lieu: '',
    technicienNom: '',
    technicienEmail: '',
    technicienPassword: '',
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({ email: loginForm.email, role: loginForm.role });
    navigate('/dashboard');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Entreprise inscrite :", registerForm);
    alert("Inscription réussie !");
    setTab('login');
    setRegisterForm({
      nomEntreprise: '',
      ice: '',
      lieu: '',
      technicienNom: '',
      technicienEmail: '',
      technicienPassword: '',
    });
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-12">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`px-4 py-2 rounded ${tab === 'login' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setTab('login')}
          >
            Connexion
          </button>
          <button
            className={`px-4 py-2 rounded ${tab === 'register' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setTab('register')}
          >
            Inscription entreprise
          </button>
        </div>

        {/* Login */}
        {tab === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Connexion</h2>
            <input
              type="email"
              placeholder="Email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <select
              value={loginForm.role}
              onChange={(e) => setLoginForm({ ...loginForm, role: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="client">Client</option>
              <option value="logisticien">Logisticien</option>
              <option value="technicien">Technicien</option>
              <option value="manager">Manager</option>
              <option value="admin">Administrateur</option>
            </select>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 w-full rounded hover:bg-green-700">
              Se connecter
            </button>
          </form>
        )}

        {/* Register */}
        {tab === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <h2 className="text-xl font-semibold text-green-700 mb-2">Inscription entreprise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="nomEntreprise"
                placeholder="Nom de l'entreprise"
                value={registerForm.nomEntreprise}
                onChange={(e) => setRegisterForm({ ...registerForm, nomEntreprise: e.target.value })}
                className="p-2 border rounded"
                required
              />
              <input
                name="ice"
                placeholder="ICE"
                value={registerForm.ice}
                onChange={(e) => setRegisterForm({ ...registerForm, ice: e.target.value })}
                className="p-2 border rounded"
                required
              />
              <input
                name="lieu"
                placeholder="Lieu"
                value={registerForm.lieu}
                onChange={(e) => setRegisterForm({ ...registerForm, lieu: e.target.value })}
                className="p-2 border rounded"
                required
              />
            </div>
            <h3 className="text-green-700 font-semibold mt-4">Technicien associé</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="technicienNom"
                placeholder="Nom du technicien"
                value={registerForm.technicienNom}
                onChange={(e) => setRegisterForm({ ...registerForm, technicienNom: e.target.value })}
                className="p-2 border rounded"
                required
              />
              <input
                name="technicienEmail"
                placeholder="Email"
                value={registerForm.technicienEmail}
                onChange={(e) => setRegisterForm({ ...registerForm, technicienEmail: e.target.value })}
                className="p-2 border rounded"
                required
              />
              <input
                type="password"
                name="technicienPassword"
                placeholder="Mot de passe"
                value={registerForm.technicienPassword}
                onChange={(e) => setRegisterForm({ ...registerForm, technicienPassword: e.target.value })}
                className="p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 w-full rounded hover:bg-green-700">
              S'inscrire
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
