import React from 'react';

const APropos = () => (
  <div className="min-h-screen bg-gray-50 pt-24 px-4">
    <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">À propos</h2>
    <div className="max-w-3xl mx-auto mb-8 text-center">
      <p className="text-lg text-gray-700 mb-4">
        Le cabinet de psychothérapie vous accueille dans un cadre bienveillant et confidentiel. J’accompagne adultes, couples et familles dans leur cheminement vers un mieux-être psychique et relationnel.
      </p>
      <p className="text-gray-500">Approche intégrative, écoute active, respect du rythme de chacun.</p>
    </div>
    <div className="max-w-3xl mx-auto mt-[50px]">
      <h3 className="text-xl font-semibold text-purple-600  mb-4">[Votre nom]</h3>
      <h2 className="w-[80%] text-gray-700 text-[1.1rem]">Je suis [nom] diplome de psycoterhapie à [lieu de formation] 
        je suis spetialiser dans la [spetialisation] notre but est [but et description detailler]. <br/>
        Nous avons ouvert notre cabinet en [annee] nous accompagnons les personnes dans leur cheminement vers un mieux-être psychique et relationnel.</h2>
      <h2 className="text-gray-500 w-[80%] mt-8">Nous fournissons des services de qualité pour vous accompagner dans 
        votre cheminement vers un mieux-être psychique et relationnel.</h2>
      <ul className="space-y-4">
        
      </ul>
    </div>
  </div>
);

export default APropos; 