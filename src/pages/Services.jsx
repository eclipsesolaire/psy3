import React from 'react';

const services = [
  {
    titre: 'Psychothérapie individuelle',
    description: 'Accompagnement personnalisé pour surmonter les difficultés personnelles, émotionnelles ou relationnelles.',
    prix: '[euro] '
  },
  {
    titre: 'Thérapie de couple',
    description: 'Aide à la communication, gestion des conflits et renforcement du lien dans le couple.',
    prix: '[euro] '
  },
  {
    titre: 'Thérapie familiale',
    description: 'Soutien pour améliorer les relations et résoudre les tensions au sein de la famille.',
    prix: '[euro]'
  },
  {
    titre: 'Gestion du stress et des émotions',
    description: 'Outils et techniques pour mieux vivre le stress, l’anxiété ou les émotions envahissantes.',
    prix: '[euro]'
  },
  {
    titre: 'Développement personnel',
    description: 'Travail sur la confiance en soi, l’estime de soi et l’épanouissement personnel.',
    prix: '[euro]'
  },
];

const Services = () => (
  <>
  <div className="min-h-screen bg-white pt-[120px] px-4">
    <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Nos services</h2>
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      {services.map((srv, idx) => (
        <div key={idx} className="border rounded-lg py-8 text-center mt-[20px]">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">{srv.titre}</h3>
          <p className="text-gray-700">{srv.description}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="mt-[60px] bg-gray-100 w-full px-6 py-8">
  <h2 className="text-2xl font-bold text-center text-purple-700 mb-10">Tarifs</h2>
  <div className="flex flex-wrap justify-center gap-8">
    {services.map((srv, key) => (
      <div
        key={key}
        className="bg-white border-2 rounded-md w-full sm:w-[45%] lg:w-[30%] 
          min-w-[280px] flex flex-col justify-between p-6 h-[160px] shadow-sm">
        <p className="text-center text-purple-600 font-bold text-[1.2rem] mb-4">Tarif</p>
        <p className="text-center text-gray-700 flex-grow">
          Nous fixons un tarif horaire de :<br />
          <span className="font-bold text-[1.1rem] text-purple-600">{srv.prix}</span>
        </p>
      </div>
    ))}
  </div>
</div>
  </>
);

export default Services; 