import React from "react";
import { Helmet } from "react-helmet-async";; // Para manejar metaetiquetas dinámicas
import { useLanguage } from "../context/LanguageContext";
import homebg from "/images/homebg-alfa2.webp";

// Traducciones
const translations = {
  en: {
    Home: {
      title: {
        your: "YOUR",
        fast: "FAST",
        and: "AND",
        safe: "SAFE",
        ride: "RIDE",
      },
      subtitle: "Experience luxury transportation with Martinto Gomez Taxi",
      description:
        "Martinto Gomez Taxi offers premium luxury transportation services. Book your ride now for a seamless and elegant experience.",
    },
  },
  de: {
    Home: {
      title: {
        your: "IHRE",
        fast: "SCHNELLE",
        and: "UND",
        safe: "SICHERE",
        ride: "FAHRT",
      },
      subtitle: "Erleben Sie Luxustransport mit Martinto Gomez Taxi",
      description:
        "Martinto Gomez Taxi bietet Premium-Luxustransportdienste an. Buchen Sie jetzt für ein nahtloses und elegantes Erlebnis.",
    },
  },
  es: {
    Home: {
      title: {
        your: "SU",
        fast: "RÁPIDO",
        and: "Y",
        safe: "SEGURO",
        ride: "VIAJE",
      },
      subtitle: "Experimente el transporte de lujo con Martinto Gomez Taxi",
      description:
        "Martinto Gomez Taxi ofrece servicios de transporte de lujo premium. Reserve su viaje ahora para una experiencia fluida y elegante.",
    },
  },
  fr: {
    Home: {
      title: {
        your: "VOTRE",
        fast: "RAPIDE",
        and: "ET",
        safe: "SÛR",
        ride: "TRAJET",
      },
      subtitle: "Découvrez le transport de luxe avec Martinto Gomez Taxi",
      description:
        "Martinto Gomez Taxi propose des services de transport de luxe haut de gamme. Réservez dès maintenant pour une expérience fluide et élégante.",
    },
  },
};

function Home() {
  const { language } = useLanguage();
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language || "en"];
    keys.forEach((k) => (value = value?.[k]));
    return value || "";
  };

  // Mensaje para WhatsApp
  const message = encodeURIComponent(
    "Hola, estoy interesado en su servicio de taxi."
  );
  const socialLinks = {
    whatsapp: `https://wa.me/+41755777700?text=${message}`,
    instagram: "https://instagram.com/martintogomez.taxi",
    facebook: "https://www.facebook.com/profile.php?id=61568516343141",
  };

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], "_blank");
  };

  return (
    <>
      {/* Metaetiquetas dinámicas con react-helmet */}
      <Helmet>
        <title>{t("Home.title.your")} | Martinto Gomez Taxi</title>
        <meta name="description" content={t("Home.description")} />
        <meta property="og:title" content={t("Home.title.your")} />
        <meta property="og:description" content={t("Home.description")} />
        <meta property="og:image" content={homebg} />
        <meta property="og:url" content="https://martintogomez-taxi.com" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Sección principal */}
      <section
        id="home"
        className="relative h-screen text-white flex items-center justify-center border-b-4 border-yellow-500 max-w-4xl mx-auto"
      >
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${homebg})` }}
          role="img"
          aria-label="Luxury taxi service background"
        ></div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-4 pb-[80px] max-w-2xl md:max-w-4xl">
          {/* Título */}
          <h1 className="text-5xl font-bold uppercase leading-tight tracking-wide">
            <div>{t("Home.title.your")}</div>
            <div>{t("Home.title.fast")}</div>
            <div>{t("Home.title.and")}</div>
            <div>{t("Home.title.safe")}</div>
            <div>{t("Home.title.ride")}</div>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 text-lg md:text-xl lg:text-2xl">
            {t("Home.subtitle")}
          </p>

          {/* Botones de redes sociales minimalistas */}
          <div className="mt-12 flex gap-6 justify-center">
            {/* WhatsApp */}
            <button
              onClick={() => handleSocialClick("whatsapp")}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-green-500 rounded-full hover:bg-green-600 transition duration-300"
            >
              <i className="ri-whatsapp-line text-xl md:text-2xl lg:text-3xl text-white"></i>
            </button>

            {/* Instagram */}
            <button
              onClick={() => handleSocialClick("instagram")}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-pink-500 rounded-full hover:bg-pink-600 transition duration-300"
            >
              <i className="ri-instagram-line text-xl md:text-2xl lg:text-3xl text-white"></i>
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleSocialClick("facebook")}
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <i className="ri-facebook-circle-line text-xl md:text-2xl lg:text-3xl text-white"></i>
            </button>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-10 md:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white z-10">
          <span className="text-xs md:text-sm font-bold">SCROLL</span>
          <i className="ri-arrow-down-s-line animate-bounce mt-1 text-yellow-500 text-4xl "></i>
        </div>
      </section>
    </>
  );
}

export default Home;



