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

  const handleChange = (formSetter) => (e) => {
    formSetter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'login') {
      login(loginForm);
      navigate('/dashboard');
    } else {
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
    }
  };

  const renderInput = (name, placeholder, value, onChange, type = 'text') => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
      required
    />
  );

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="bg-gradient-to-r from-teal-500 to-green-600 p-8 rounded-lg shadow-lg w-full max-w-2xl text-white">
        <div className="flex justify-center mb-6 space-x-4">
          {['login', 'register'].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded ${tab === type ? 'bg-white text-green-700' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setTab(type)}
            >
              {type === 'login' ? 'Connexion' : 'Inscription entreprise'}
            </button>
          ))}
        </div>

        {tab === 'login' ? (
          <form onSubmit={(e) => handleSubmit(e, 'login')} className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-2">Connexion</h2>
            {renderInput('email', 'Email', loginForm.email, handleChange(setLoginForm), 'email')}
            <select
              name="role"
              value={loginForm.role}
              onChange={handleChange(setLoginForm)}
              className="w-full p-2 border rounded text-gray-800"
            >
              {['client', 'logisticien', 'technicien', 'manager', 'admin'].map((role) => (
                <option key={role} value={role}>
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </option>
              ))}
            </select>
            <button type="submit" className="bg-white text-green-700 px-4 py-2 w-full rounded hover:bg-gray-100">
              Se connecter
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => handleSubmit(e, 'register')} className="space-y-4">
            <h2 className="text-xl font-semibold text-white mb-2">Inscription entreprise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['nomEntreprise', 'ice', 'lieu'].map((field) =>
                renderInput(field, `Nom de ${field}`, registerForm[field], handleChange(setRegisterForm))
              )}
            </div>
            <h3 className="text-white font-semibold mt-4">Technicien associé</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['technicienNom', 'technicienEmail', 'technicienPassword'].map((field) =>
                renderInput(
                  field,
                  field === 'technicienPassword' ? 'Mot de passe' : `Nom de ${field}`,
                  registerForm[field],
                  handleChange(setRegisterForm),
                  field === 'technicienPassword' ? 'password' : 'text'
                )
              )}
            </div>
            <button type="submit" className="bg-white text-green-700 px-4 py-2 w-full rounded hover:bg-gray-100">
              S'inscrire
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
