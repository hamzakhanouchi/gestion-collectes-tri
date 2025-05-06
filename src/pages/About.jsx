import React from 'react';

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl space-y-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4 text-center">À propos de notre service</h2>
        <p className="text-gray-700 leading-relaxed">
          Notre application vise à simplifier la gestion des déchets électroniques pour les entreprises.
          Elle permet de planifier, suivre et valoriser chaque étape du processus, de la collecte au tri,
          avec transparence et efficacité. Chaque acteur a accès à un tableau de bord dédié et les entreprises peuvent suivre l’impact écologique de leurs actions.
        </p>
        <div className="bg-green-100 p-4 rounded shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Statistiques mondiales</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Environ 50 millions de tonnes de déchets électroniques sont générées chaque année dans le monde.</li>
            <li>Seulement 20% de ces déchets sont recyclés correctement.</li>
            <li>Les déchets électroniques contiennent des matériaux précieux comme l'or, l'argent et le cuivre.</li>
          </ul>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow-md">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Pourquoi la collecte et le triage sont importants ?</h3>
          <p className="text-gray-700">
            La collecte et le triage des déchets électroniques permettent de :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Réduire l'impact environnemental en évitant la pollution des sols et des eaux.</li>
            <li>Récupérer des matériaux précieux pour les réutiliser dans de nouveaux produits.</li>
            <li>Créer des emplois dans le secteur du recyclage et de la gestion des déchets.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
