import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-xl">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Contactez-nous</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
