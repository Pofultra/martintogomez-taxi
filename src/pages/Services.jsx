import React from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Clock,
  Star,
  Plane,
  MapPin,
  ShieldPlus,
  Hotel,
  Map,
  BriefcaseBusiness,
  CarTaxiFront,
  Car,
} from "lucide-react";

// Traducciones
const translations = {
  en: {
    services: {
      title: "Our Services",
      "24_7": "24/7 Availability",
      "24_7_desc":
        "Reliable transportation anytime, day or night, whenever you need it.",
      driver: "Experienced Driver",
      driver_desc:
        "Professional driving with years of experience for a smooth and safe journey.",
      airport: "Airport",
      airport_desc:
        "Seamless airport transfers with punctuality and comfort guaranteed.",
      events: "Events",
      events_desc:
        "Trustworthy rides for any event, whether it's a wedding, birthday, or corporate party.",
      hospitals: "Hospitals",
      hospitals_desc:
        "Reliable transportation to and from hospitals and clinics, ensuring timely arrivals.",
      nursing_homes: "Nursing Homes",
      nursing_homes_desc:
        "Comfortable rides for seniors to and from nursing homes, always with a helping hand.",
      travel_tours: "Travel/Tours",
      travel_tours_desc:
        "Experience the best of your city with our guided tours or comfortable rides to and from the airport.",
      business_vip_transfer: "Business VIP Transfer",
      business_vip_transfer_desc:
        "Professional, punctual and personalized transportation for your company's most important clients.",
      economic_transfer: "Economic Transfer",
      economic_transfer_desc:
        "Affordable and reliable rides for any occasion, without compromising on quality.",
      premium_transfer: "Premium Transfer",
      premium_transfer_desc:
        "Top-notch rides for special occasions, complete with luxurious vehicles and impeccable service.",
    },
  },
  es: {
    services: {
      title: "Nuestros Servicios",
      "24_7": "Disponibilidad 24/7",
      "24_7_desc":
        "Transporte confiable en cualquier momento, de día o de noche, cuando lo necesites.",
      driver: "Conductor Experimentado",
      driver_desc:
        "Conducción profesional con años de experiencia para un viaje suave y seguro.",
      airport: "Aeropuerto",
      airport_desc:
        "Traslados al aeropuerto sin complicaciones con puntualidad y comodidad garantizadas.",
      events: "Eventos",
      events_desc:
        "Viajes confiables para cualquier evento, ya sea una boda, cumpleaños o fiesta corporativa.",
      hospitals: "Hospitales",
      hospitals_desc:
        "Transporte confiable hacia y desde hospitales y clínicas, asegurando llegadas puntuales.",
      nursing_homes: "Residencias de Ancianos",
      nursing_homes_desc:
        "Viajes cómodos para personas mayores hacia y desde residencias, siempre con una mano amiga.",
      travel_tours: "Viajes/Tours",
      travel_tours_desc:
        "Experimenta lo mejor de tu ciudad con nuestros tours guiados o traslados cómodos al aeropuerto.",
      business_vip_transfer: "Traslado VIP Empresarial",
      business_vip_transfer_desc:
        "Transporte profesional, puntual y personalizado para los clientes más importantes de tu empresa.",
      economic_transfer: "Traslado Económico",
      economic_transfer_desc:
        "Viajes asequibles y confiables para cualquier ocasión, sin comprometer la calidad.",
      premium_transfer: "Traslado Premium",
      premium_transfer_desc:
        "Viajes de primera clase para ocasiones especiales, con vehículos lujosos y un servicio impecable.",
    },
  },
  fr: {
    services: {
      title: "Nos Services",
      "24_7": "Disponibilité 24/7",
      "24_7_desc":
        "Transport fiable à tout moment, de jour comme de nuit, quand vous en avez besoin.",
      driver: "Chauffeur Expérimenté",
      driver_desc:
        "Conduite professionnelle avec des années d'expérience pour un trajet fluide et sûr.",
      airport: "Aéroport",
      airport_desc:
        "Transferts aéroport sans tracas avec ponctualité et confort garantis.",
      events: "Événements",
      events_desc:
        "Trajets fiables pour tout événement, qu'il s'agisse d'un mariage, d'un anniversaire ou d'une fête d'entreprise.",
      hospitals: "Hôpitaux",
      hospitals_desc:
        "Transport fiable vers et depuis les hôpitaux et cliniques, assurant des arrivées ponctuelles.",
      nursing_homes: "Maisons de Retraite",
      nursing_homes_desc:
        "Trajets confortables pour les personnes âgées vers et depuis les maisons de retraite, toujours avec une aide bienveillante.",
      travel_tours: "Voyages/Excursions",
      travel_tours_desc:
        "Découvrez le meilleur de votre ville avec nos visites guidées ou des trajets confortables vers et depuis l'aéroport.",
      business_vip_transfer: "Transfert VIP Affaires",
      business_vip_transfer_desc:
        "Transport professionnel, ponctuel et personnalisé pour les clients les plus importants de votre entreprise.",
      economic_transfer: "Transfert Économique",
      economic_transfer_desc:
        "Trajets abordables et fiables pour toute occasion, sans compromettre la qualité.",
      premium_transfer: "Transfert Premium",
      premium_transfer_desc:
        "Trajets haut de gamme pour les occasions spéciales, avec des véhicules luxueux et un service impeccable.",
    },
  },
  de: {
    services: {
      title: "Unsere Dienstleistungen",
      "24_7": "24/7 Verfügbarkeit",
      "24_7_desc":
        "Zuverlässiger Transport jederzeit, Tag und Nacht, wenn Sie ihn benötigen.",
      driver: "Erfahrener Fahrer",
      driver_desc:
        "Professionelles Fahren mit jahrelanger Erfahrung für eine reibungslose und sichere Fahrt.",
      airport: "Flughafen",
      airport_desc:
        "Reibungslose Flughafentransfers mit Garantie auf Pünktlichkeit und Komfort.",
      events: "Veranstaltungen",
      events_desc:
        "Vertrauenswürdige Fahrten für jede Veranstaltung, sei es eine Hochzeit, ein Geburtstag oder eine Firmenfeier.",
      hospitals: "Krankenhäuser",
      hospitals_desc:
        "Zuverlässiger Transport zu und von Krankenhäusern und Kliniken, um pünktliche Ankünfte zu gewährleisten.",
      nursing_homes: "Pflegeheime",
      nursing_homes_desc:
        "Komfortable Fahrten für Senioren zu und von Pflegeheimen, immer mit einer helfenden Hand.",
      travel_tours: "Reisen/Ausflüge",
      travel_tours_desc:
        "Erleben Sie das Beste Ihrer Stadt mit unseren geführten Touren oder komfortablen Fahrten zum und vom Flughafen.",
      business_vip_transfer: "Geschäftlicher VIP-Transfer",
      business_vip_transfer_desc:
        "Professioneller, pünktlicher und personalisierter Transport für die wichtigsten Kunden Ihres Unternehmens.",
      economic_transfer: "Wirtschaftlicher Transfer",
      economic_transfer_desc:
        "Bezahlbare und zuverlässige Fahrten für jede Gelegenheit, ohne Kompromisse bei der Qualität.",
      premium_transfer: "Premium-Transfer",
      premium_transfer_desc:
        "Hochwertige Fahrten für besondere Anlässe, komplett mit luxuriösen Fahrzeugen und einem makellosen Service.",
    },
  },
};

// Componente de tarjeta de servicio
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="flex items-center justify-center mb-4">
      <div className="rounded-full bg-[#1B1B25] p-3">
        <Icon size={40} className="text-yellow-500" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-center mb-2 text-gray-900">{title}</h3>
    <p className="text-sm text-center text-gray-600">{description}</p>
  </div>
);

export const Services = () => {
  const { language } = useLanguage();
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language || "en"];
    keys.forEach((k) => (value = value?.[k]));
    return value || "";
  };

  return (
    <section id="services" className="py-16 bg-gray-100 border-b-4 border-yellow-500">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          {t("services.title")}
        </h2>

        {/* Tarjetas de servicios */}
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Clock}
            title={t("services.24_7")}
            description={t("services.24_7_desc")}
          />
          <ServiceCard
            icon={Star}
            title={t("services.driver")}
            description={t("services.driver_desc")}
          />
          <ServiceCard
            icon={Plane}
            title={t("services.airport")}
            description={t("services.airport_desc")}
          />
          <ServiceCard
            icon={MapPin}
            title={t("services.events")}
            description={t("services.events_desc")}
          />
          <ServiceCard
            icon={ShieldPlus}
            title={t("services.hospitals")}
            description={t("services.hospitals_desc")}
          />
          <ServiceCard
            icon={Hotel}
            title={t("services.nursing_homes")}
            description={t("services.nursing_homes_desc")}
          />
          <ServiceCard
            icon={Map}
            title={t("services.travel_tours")}
            description={t("services.travel_tours_desc")}
          />
          <ServiceCard
            icon={BriefcaseBusiness}
            title={t("services.business_vip_transfer")}
            description={t("services.business_vip_transfer_desc")}
          />
          <ServiceCard
            icon={CarTaxiFront}
            title={t("services.economic_transfer")}
            description={t("services.economic_transfer_desc")}
          />
          <ServiceCard
            icon={Car}
            title={t("services.premium_transfer")}
            description={t("services.premium_transfer_desc")}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;