import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="bg-gradient-to-r from-teal-500 to-green-600 p-8 rounded-lg shadow-lg w-full max-w-4xl text-center text-white">
          <h1 className="text-5xl font-extrabold mb-6">
            Simplifiez la gestion des déchets électroniques
          </h1>
          <p className="text-lg mb-6">
            Planifiez, suivez et triez vos équipements en toute simplicité grâce à notre plateforme intuitive.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/login"
              className="bg-white text-green-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Commencez maintenant
            </a>
            <a
              href="#about"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        <div className="bg-gradient-to-r from-teal-500 to-green-600 p-8 rounded-lg shadow-lg w-full max-w-6xl text-center text-white">
          <h2 className="text-4xl font-bold mb-12">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-green-600 text-6xl mb-4">
                <i className="fas fa-recycle"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Collecte des Déchets
              </h3>
              <p className="text-gray-600">
                Planifiez et gérez vos collectes de déchets électroniques en toute simplicité.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-green-600 text-6xl mb-4">
                <i className="fas fa-sort"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Triage des Équipements
              </h3>
              <p className="text-gray-600">
                Triez vos équipements pour maximiser leur réutilisation et recyclage.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-green-600 text-6xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Suivi et Rapports
              </h3>
              <p className="text-gray-600">
                Suivez vos collectes et accédez à des rapports détaillés sur vos actions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      >
        <div className="bg-gradient-to-r from-teal-500 to-green-600 p-8 rounded-lg shadow-lg w-full max-w-6xl text-center text-white">
          <h2 className="text-4xl font-bold mb-8">À propos de notre service</h2>
          <p className="text-lg leading-relaxed mb-8">
            Notre application vise à simplifier la gestion des déchets électroniques pour les entreprises.
            Elle permet de planifier, suivre et valoriser chaque étape du processus, de la collecte au tri,
            avec transparence et efficacité. Chaque acteur a accès à un tableau de bord dédié et les entreprises peuvent suivre l’impact écologique de leurs actions.
          </p>
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-gray-800">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Statistiques mondiales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Environ 50 millions de tonnes de déchets électroniques sont générées chaque année dans le monde.</li>
              <li>Seulement 20% de ces déchets sont recyclés correctement.</li>
              <li>Les déchets électroniques contiennent des matériaux précieux comme l'or, l'argent et le cuivre.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
