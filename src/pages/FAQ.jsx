import React from 'react';

const FAQ = () => {
  const faqs = [
    { question: "Comment soumettre une demande de collecte ?", answer: "Vous pouvez soumettre une demande via votre tableau de bord client." },
    { question: "Quels types de déchets sont acceptés ?", answer: "Nous acceptons les déchets électroniques comme les ordinateurs, serveurs, etc." },
    { question: "Comment contacter le support ?", answer: "Vous pouvez nous contacter via la page Contact." },
  ];

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/faq-bg.jpg')" }}
    >
      <div className="bg-gradient-to-r from-teal-500 to-green-600 p-8 rounded-lg shadow-lg w-full max-w-4xl text-white">
        <h1 className="text-4xl font-bold mb-6 text-center">FAQ</h1>
        <ul className="space-y-6">
          {faqs.map((faq, index) => (
            <li key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
