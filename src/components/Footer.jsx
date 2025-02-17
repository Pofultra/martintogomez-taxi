import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import logo from '/images/logoa.png';


const translations = {
  en: {
    rights: "© 2025 Martingomez Taxi. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    language: "Language",
    contact: {
      phone: "Phone",
      email: "Email",
      address: "Address",
    },
  },
  es: {
    rights: "© 2025 Martingomez Taxi. Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    language: "Idioma",
    contact: {
      phone: "Teléfono",
      email: "Correo Electrónico",
      address: "Dirección",
    },
  },
  fr: {
    rights: "© 2025 Martingomez Taxi. Tous droits réservés.",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'utilisation",
    language: "Langue",
    contact: {
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
    },
  },
  de: {
    rights: "© 2025 Martingomez Taxi. Alle Rechte vorbehalten.",
    privacy: "Datenschutzrichtlinie",
    terms: "Nutzungsbedingungen",
    language: "Sprache",
    contact: {
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
    },
  },
};

function Footer() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language] || translations["en"];

  return (
    <>
      
      <footer className="bg-black text-gray-400 py-8 mt-8 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
          <img src={logo} alt="Martingomez Taxi Logo" className="w-24" />
          
          <div className="space-y-4 text-white ">
            <p className="flex items-center space-x-2">
              <i className="ri-phone-fill text-yellow-500 text-lg"></i>
              <span>+41 75 5777 700</span>
            </p>
            <p className="flex items-center space-x-2">
              <i className="ri-mail-fill text-yellow-500 text-lg"></i>
              <span>service@martintogomez-taxi.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <i className="ri-home-fill text-yellow-500 text-lg"></i>
              <span>1234 Bahnhofstrasse, Zurich, 8001 Switzerland</span>
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl border-t border-gray-600 pt-4">
            <p className="text-sm">{t.rights}</p>
            <LanguageSelector language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
