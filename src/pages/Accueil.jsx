import React from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-blue-50 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-6 text-center">
          Bienvenue au Cabinet de Psychothérapie
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
          Psychothérapeute à votre écoute – Accompagnement individuel, de couple
          et familial.
          <br />
          Retrouver équilibre, confiance et bien-être grâce à la psychothérapie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-[30%] mx-auto">
          <div className="flex flex-row gap-4 w-full max-w-md pl-4 sm:pl-0">
            <Link to="/services" className="flex-1 py-[13px] text-center rounded-md min-w-[120px] bg-purple-600 text-white hover:bg-white hover:text-purple-600 font-bold">
              Découvrir les services
            </Link>
            <Link to="/contact" className="flex-1 py-[13px] min-w-[120px] font-bold hover:bg-white text-center rounded-md text-purple-600">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12 px-4 py-10">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4 text-center">
          Pourquoi choisir un psychothérapeute qualifié ?
        </h2>
        <p className="text-gray-700 text-lg mb-2 text-justify">
          S'engager dans un parcours de psychothérapie est une démarche
          importante pour retrouver harmonie et équilibre dans sa vie. Il est
          essentiel de s’adresser à un professionnel formé et compétent qui vous
          accompagnera avec écoute, bienveillance et respect de votre rythme
          personnel.
        </p>
        <p className="text-gray-700 text-lg text-justify">
          Que ce soit face à une difficulté passagère, une période de doute, ou
          un questionnement plus profond, le psychothérapeute vous aide à mieux
          comprendre vos émotions, à surmonter vos blocages et à construire des
          solutions adaptées à votre situation unique.
          <br />
          Prendre soin de sa santé mentale est aussi important que de veiller à
          son bien-être physique. Choisir le bon spécialiste, c’est s’offrir la
          possibilité d’avancer vers une vie plus épanouie et authentique.
        </p>
      </div>
    </>
  );
};

export default Accueil;
