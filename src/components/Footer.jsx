import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-white mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">

        {/* Logo et description */}
        <div className="md:col-span-2">
          <Link to="/" className="inline-block">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Psy2</h2>
          </Link>
          <p className="text-gray-300 mb-6 max-w-md">
            Votre partenaire pour un bien-être mental et émotionnel. Nous vous accompagnons 
            dans votre parcours de développement personnel avec des soins personnalisés.
          </p>
          <div>
            <h3 className='text-[1rem] mb-2 -mt-4'>Horraire:</h3>
            <p className=" text-[0.8rem]">Lundi à vendredi : <span> 00h00 - 00h00</span></p>
            <p className="text-[0.8rem]">Samdi : <span> 00h00 - 00h00</span></p>
            <p className="text-[0.8rem]">Dimanche : <span className="text-red-500 font-bold "> fermé</span></p>
            </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-white">Accueil</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
            <li><Link to="/a-propos" className="text-gray-300 hover:text-white">À propos</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📍 votre Rue Exemple, 75000 villes</li>
            <li>📞 +33 1 23 45 67 89</li>
            <li>📧 votreEmail@exemple.com</li>
          </ul>
        </div>
      </div>

      <div>
        <h3>Horraire:</h3>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
        © 2024 Votre nom. Tous droits réservés. | 
        <Link to="/" className="hover:text-white ml-1">Politique de confidentialité</Link> | 
        <Link to="/" className="hover:text-white ml-1">Mentions légales</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
