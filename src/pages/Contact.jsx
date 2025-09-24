import React from 'react';

const Contact = () => (
  <div className="min-h-screen bg-gray-50 pt-24 px-4">
    <h2 className="text-4xl font-extrabold text-purple-700 mb-12 text-center">Contactez-nous</h2>
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10">
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nom complet <span className="text-red-500">*</span></label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email <span className="text-red-500">*</span></label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre@email.com"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Téléphone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Votre numéro"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message <span className="text-red-500">*</span></label>
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            placeholder="Votre message..."
            className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 text-white font-bold py-3 rounded-md hover:bg-purple-800 transition"
        >
          Envoyer
        </button>
      </form>

      <div className="mt-12 text-gray-700 text-base space-y-4">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Informations de contact</h3>
        <div className="flex items-center space-x-3">
          <svg
            className="w-6 h-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0L6.343 16.414"></path>
            <circle cx="12" cy="12" r="9" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
          <address>123 Rue Exemple, 75000 Paris, France</address>
        </div>
        <div className="flex items-center space-x-3">
          <svg
            className="w-6 h-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18"></path>
          </svg>
          <a href="tel:+33123456789" className="hover:text-purple-800 transition">+33 1 23 45 67 89</a>
        </div>
        <div className="flex items-center space-x-3">
          <svg
            className="w-6 h-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l3-3m-3 3l3 3m7-3v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"></path>
          </svg>
          <a href="mailto:contact@exemple.com" className="hover:text-purple-800 transition">contact@exemple.com</a>
        </div>
        <div>
          <h3 className="text-purple-600 font-semibold text-[1.2rem] mb-4 mt-8">Horaires</h3>
          <p className="text-gray-600">Lundi à vendredi : <span> 00h00 - 00h00</span></p>
          <p>Samdi : <span> 00h00 - 00h00</span></p>
          <p>Dimanche : <span className="text-red-500 font-bold "> fermé</span></p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
