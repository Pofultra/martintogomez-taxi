// components/About/About.jsx
import React from "react";
import { Helmet } from "react-helmet-async"; // Para manejar metaetiquetas dinámicas
import { VehicleCarousel } from "../components/VehicleCarousel";
import { useLanguage } from "../context/LanguageContext";

// Import images
import eqe1 from "/images/mercedes/eqe1.webp";
import eqe2 from "/images/mercedes/eqe2.webp";
import mercedes_1 from "/images/mercedes/mercedes_1.webp";
import mercedes_2 from "/images/mercedes/mercedes_2.webp";
import mercedes_3 from "/images/mercedes/mercedes_3.webp";
import alfa_1 from "/images/alfa/alfa_1.webp";
import alfa_2 from "/images/alfa/alfa_2.webp";
import alfa_3 from "/images/alfa/alfa_3.webp";

// Traducciones
const translations = {
  en: {
    about_us: {
      title: "About Us",
      subtitle: "Our Fleet",
      text: "At Martinto Gomez Taxi, we offer reliable and personalized transportation with dedicated drivers. Our goal is to provide a comfortable and stress-free experience, ensuring you reach your destination safely and on time.",
    },
    EQE: {
      name: "Mercedes-Benz EQE",
      users: "3-4 people",
      features: {
        capacity: "Capacity: 4 passengers",
        efficient: "Efficient electric motor",
        air: "Dual-zone climate control",
        load_capacity: "Spacious trunk",
        wifi: "Onboard Wi-Fi",
        music: "Premium audio system",
      },
    },
    Mercedes_V_Class: {
      name: "Mercedes V Class",
      users: "7 people",
      features: {
        capacity: "Capacity: 7 passengers",
        confort: "Maximum comfort",
        air: "Tri-zone climate control",
        entretainment: "Onboard entertainment",
        wifi: "Onboard Wi-Fi",
        battery: "USB ports in every row",
      },
    },
    Alfa_Romeo_4C: {
      name: "Alfa Romeo 4C",
      users: "3-4 people",
      features: {
        capacity: "Capacity: 3 passengers",
        efficient: "Sports performance",
        safety: "Maximum safety",
        air: "Dual-zone climate control",
        navigation: "Premium navigation",
        music: "Audio Harman Kardon",
      },
    },
  },
  es: {
    about_us: {
      title: "Sobre Nosotros",
      subtitle: "Nuestra Flota",
      text: "En Martinto Gomez Taxi, ofrecemos transporte confiable y personalizado con conductores dedicados. Nuestro objetivo es brindar una experiencia cómoda y sin estrés, asegurando que llegues a tu destino de manera segura y puntual.",
    },
    EQE: {
      name: "Mercedes-Benz EQE",
      users: "3-4 personas",
      features: {
        capacity: "Capacidad: 4 pasajeros",
        efficient: "Motor eléctrico altamente eficiente",
        air: "Climatizador automático de dos zonas",
        load_capacity: "Amplio espacio en el maletero",
        wifi: "Punto de acceso Wi-Fi a bordo",
        music: "Sistema de sonido premium Burmester",
      },
    },
    Mercedes_V_Class: {
      name: "Mercedes V Class",
      users: "7 personas",
      features: {
        capacity: "Capacidad: 7 pasajeros",
        confort: "Máximo confort",
        air: "Control climático tri-zona",
        entretainment: "Entretenimiento a bordo",
        wifi: "Wi-Fi a bordo",
        battery: "Puertos USB en cada fila",
      },
    },
    Alfa_Romeo_4C: {
      name: "Alfa Romeo 4C",
      users: "3-4 personas",
      features: {
        capacity: "Capacidad: 3 pasajeros",
        efficient: "Rendimiento deportivo",
        safety: "Máxima seguridad",
        air: "Control climático dual-zona",
        navigation: "Navegación premium",
        music: "Audio Harman Kardon",
      },
    },
  },
  fr: {
    about_us: {
      title: "À propos de nous",
      subtitle: "Notre flotte",
      text: "Chez Martinto Gomez Taxi, nous offrons un transport fiable et personnalisé avec des chauffeurs dédiés. Notre objectif est de vous offrir une expérience confortable et sans stress, en vous assurant d'atteindre votre destination en toute sécurité et à l'heure.",
    },
    EQE: {
      name: "Mercedes-Benz EQE",
      users: "3-4 personnes",
      features: {
        capacity: "Capacité : 4 passagers",
        efficient: "Moteur électrique très efficace",
        air: "Climatisation automatique à deux zones",
        load_capacity: "Généreux espace de rangement",
        wifi: "Hotspot Wi-Fi à bord",
        music: "Système audio premium Burmester",
      },
    },
    Mercedes_V_Class: {
      name: "Mercedes V Class",
      users: "7 personnes",
      features: {
        capacity: "Capacité : 7 passagers",
        confort: "Confort maximal",
        air: "Contrôle climatique tri-zone",
        entretainment: "Divertissement à bord",
        wifi: "Wi-Fi à bord",
        battery: "Ports USB sur chaque rangée",
      },
    },
    Alfa_Romeo_4C: {
      name: "Alfa Romeo 4C",
      users: "3-4 personnes",
      features: {
        capacity: "Capacité : 3 passagers",
        efficient: "Performance sportive",
        safety: "Sécurité maximale",
        air: "Contrôle climatique bi-zone",
        navigation: "Navigation premium",
        music: "Audio Harman Kardon",
      },
    },
  },
  de: {
    about_us: {
      title: "Über uns",
      subtitle: "Unsere Flotte",
      text: "Bei Martinto Gomez Taxi bieten wir zuverlässigen und personalisierten Transport mit engagierten Fahrern an. Unser Ziel ist es, ein komfortables und stressfreies Erlebnis zu bieten und sicherzustellen, dass Sie sicher und pünktlich am Ziel ankommen.",
    },
    EQE: {
      name: "Mercedes-Benz EQE",
      users: "3-4 Personen",
      features: {
        capacity: "Kapazität: 4 Passagiere",
        efficient: "Hoch effizienter Elektromotor",
        air: "Zweizonen-Klimaautomatik",
        load_capacity: "Großzügiger Kofferraum",
        wifi: "WLAN-Hotspot an Bord",
        music: "Premium Burmester Soundsystem",
      },
    },
    Mercedes_V_Class: {
      name: "Mercedes V Class",
      users: "7 Personen",
      features: {
        capacity: "Kapazität: 7 Passagiere",
        confort: "Maximaler Komfort",
        air: "Dreizonen-Klimaautomatik",
        entretainment: "Unterhaltungssystem an Bord",
        wifi: "WLAN an Bord",
        battery: "USB-Anschlüsse in jeder Reihe",
      },
    },
    Alfa_Romeo_4C: {
      name: "Alfa Romeo 4C",
      users: "3-4 Personen",
      features: {
        capacity: "Kapazität: 3 Passagiere",
        efficient: "Sportliche Leistung",
        safety: "Maximale Sicherheit",
        air: "Zweizonen-Klimaautomatik",
        navigation: "Premium-Navigation",
        music: "Harman Kardon Audio",
      },
    },
  },
};

export const About = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language || "en"];
    keys.forEach((k) => (value = value?.[k]));
    return value || "";
  };

  // Organize images for scalability
  const vehicleImages = {
    eqe: [eqe1, eqe2,eqe1],
    mercedes: [mercedes_1, mercedes_2, mercedes_3],
    alfa: [alfa_1, alfa_2, alfa_3],
  };

  // Define vehicles dynamically using translations
  const vehicles = [
    {
      id: 1,
      name: t("EQE.name"),
      capacity: t("EQE.users"),
      features: [
        { icon: "Users", text: t("EQE.features.capacity") },
        { icon: "Fuel", text: t("EQE.features.efficient") },
        { icon: "Wind", text: t("EQE.features.air") },
        { icon: "Luggage", text: t("EQE.features.load_capacity") },
        { icon: "Wifi", text: t("EQE.features.wifi") },
        { icon: "Music", text: t("EQE.features.music") },
      ],
      images: vehicleImages.eqe,
    },
    {
      id: 2,
      name: t("Mercedes_V_Class.name"),
      capacity: t("Mercedes_V_Class.users"),
      features: [
        { icon: "Users", text: t("Mercedes_V_Class.features.capacity") },
        { icon: "ThumbsUp", text: t("Mercedes_V_Class.features.confort") },
        { icon: "Wind", text: t("Mercedes_V_Class.features.air") },
        { icon: "Tv", text: t("Mercedes_V_Class.features.entretainment") },
        { icon: "Wifi", text: t("Mercedes_V_Class.features.wifi") },
        { icon: "BatteryFull", text: t("Mercedes_V_Class.features.battery") },
      ],
      images: vehicleImages.mercedes,
    },
    {
      id: 3,
      name: t("Alfa_Romeo_4C.name"),
      capacity: t("Alfa_Romeo_4C.users"),
      features: [
        { icon: "Users", text: t("Alfa_Romeo_4C.features.capacity") },
        { icon: "Gauge", text: t("Alfa_Romeo_4C.features.efficient") },
        { icon: "Shield", text: t("Alfa_Romeo_4C.features.safety") },
        { icon: "Wind", text: t("Alfa_Romeo_4C.features.air") },
        { icon: "Map", text: t("Alfa_Romeo_4C.features.navigation") },
        { icon: "Speaker", text: t("Alfa_Romeo_4C.features.music") },
      ],
      images: vehicleImages.alfa,
    },
  ];

  return (
    <>
      {/* Contenido principal */}
      <section id="about_us" className="py-16 bg-gray-100 border-b-4 border-yellow-500">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl font-oswald text-yellow-500 text-center mb-8">
            {t("about_us.title")}
          </h2>
          {/* Description */}
          <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            {t("about_us.text")}
          </p>
          {/* Vehicle Carousel */}
          <div className="max-w-7xl mx-auto">
            <VehicleCarousel vehicles={vehicles} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
