import React from "react";
import { useLanguage } from "../context/LanguageContext";

// Traducciones
const translations = {
  en: {
    contact: {
      title: "Contact Us",
      message:
        "We are here to help you. Contact us through the following means:",
      phone: "Phone",
      email: "Email",
      address: "Address",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      linkedin: "LinkedIn",
    },
  },
  es: {
    contact: {
      title: "Contáctenos",
      message:
        "Estamos aquí para ayudarte. Contáctenos a través de los siguientes medios:",
      phone: "Teléfono",
      email: "Correo Electrónico",
      address: "Dirección",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      linkedin: "LinkedIn",
    },
  },
  fr: {
    contact: {
      title: "Contactez-nous",
      message:
        "Nous sommes là pour vous aider. Contactez-nous par les moyens suivants :",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      linkedin: "LinkedIn",
    },
  },
  de: {
    contact: {
      title: "Kontaktieren Sie uns",
      message:
        "Wir sind hier, um Ihnen zu helfen. Kontaktieren Sie uns über die folgenden Kanäle:",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      facebook: "Facebook",
      linkedin: "LinkedIn",
    },
  },
};

export const Contact = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language || "en"];
    keys.forEach((k) => (value = value?.[k]));
    return value || "";
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">
          {t("contact.title")}
        </h2>

        {/* Mensaje introductorio */}
        <div className="max-w-xl mx-auto text-center space-y-6">
          <p className="text-lg text-black">{t("contact.message")}</p>

          {/* Información de contacto */}
          <div className="space-y-2 text-black">
            <p>
              <strong>{t("contact.phone")}: </strong> +41 75 5777 700
            </p>
            <p>
              <strong>{t("contact.email")}: </strong>{" "}
              service@martintogomez-taxi.com
            </p>            
          </div>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61568516343141"
              aria-label={t("contact.facebook")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-facebook-box-fill text-2xl text-blue-600 hover:text-blue-800"></i>
            </a>
            <a
              href="https://instagram.com/martintogomez.taxi"
              aria-label={t("contact.instagram")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-instagram-fill text-2xl text-pink-500 hover:text-pink-700"></i>
            </a>
            <a
              href="https://wa.me/+41755777700"
              aria-label={t("contact.whatsapp")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-whatsapp-fill text-2xl text-green-500 hover:text-green-700"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/martintogomez-taxi"
              aria-label={t("contact.linkedin")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-box-fill text-2xl text-blue-500 hover:text-blue-700"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;