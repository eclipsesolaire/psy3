import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-purple-600">Psychothérapie</h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-purple-600">Accueil</Link>
          <Link to="/services" className="text-gray-700 hover:text-purple-600">Services</Link>
          <Link to="/a-propos" className="text-gray-700 hover:text-purple-600">À propos</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation; 