import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Helmet } from "react-helmet-async";

import LanguageSelector from "./LanguageSelector";

// Traducciones en cuatro idiomas
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    contact: "Contact",    
    language: "Language",
  },
  es: {
    home: "Inicio",
    about: "Sobre Nosotros",
    services: "Servicios",
    contact: "Contacto",
    language: "Idioma",
  },
};

function Navbar({ onOpenWizard }) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language] || translations["en"]; // Usa inglés por defecto si no hay idioma definido

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú móvil
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Metadatos SEO */}
      <Helmet>
        <title>MG Taxi - Your Fast and Safe Ride</title>
      </Helmet>

      {/* Barra de navegación */}
      <nav className="fixed top-0 left-0 w-full bg-[#1a1a1a] text-white p-4 flex items-center justify-between z-50 border-b-4 border-yellow-500">
        {/* Selector de idioma */}
        <div className="ml-4">
        <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>

        {/* Logo centrado */}
        <div className="text-lg font-bold text-yellow-500 absolute left-1/2 transform -translate-x-1/2">
          MG TAXI
        </div>

        {/* Ícono de menú para móviles */}
        <button
          className="text-yellow-500 text-2xl focus:outline-none mr-4"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menú"
        >
          <i className={`ri-menu-3-line ${isMenuOpen ? "hidden" : "block"}`}></i>
          <i className={`ri-close-line ${isMenuOpen ? "block" : "hidden"}`}></i>
        </button>
      </nav>

      {/* Menú desplegable para móviles */}
      <div
        className={`fixed top-16 right-0 bg-black text-white w-64 h-screen p-6 z-50 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="menu"
        aria-label="Menú desplegable"
      >
        <a href="#home" className="block py-2 text-yellow-500">{t.home}</a>
        <a href="#about" className="block py-2">{t.about}</a>
        <a href="#services" className="block py-2">{t.services}</a>
        <a href="#contact" className="block py-2">{t.contact}</a>
      </div>
    </>
  );
}

export default Navbar;
