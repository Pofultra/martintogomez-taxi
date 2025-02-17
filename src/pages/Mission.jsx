import React from "react";
import { useLanguage } from "../context/LanguageContext";

// Traducciones
const translations = {
  en: {
    mission: {
      title: "Mission",
      text:
        "To provide personalized, safe, and reliable transportation services with a focus on convenience and customer satisfaction, ensuring every ride feels like a premium experience.",
    },
    vision: {
      title: "Vision",
      text:
        "To become the most trusted and preferred solo driver service in the city, known for exceptional customer care, efficiency, and a commitment to safety.",
    },
  },
  es: {
    mission: {
      title: "Misión",
      text:
        "Ofrecer servicios de transporte personalizados, seguros y confiables, centrados en la comodidad y la satisfacción del cliente, asegurando que cada viaje sea una experiencia premium.",
    },
    vision: {
      title: "Visión",
      text:
        "Convertirnos en el servicio de conductor individual más confiable y preferido de la ciudad, reconocidos por un cuidado excepcional al cliente, eficiencia y compromiso con la seguridad.",
    },
  },
  fr: {
    mission: {
      title: "Mission",
      text:
        "Fournir des services de transport personnalisés, sûrs et fiables, axés sur le confort et la satisfaction des clients, en assurant que chaque trajet soit une expérience premium.",
    },
    vision: {
      title: "Vision",
      text:
        "Devenir le service de chauffeur individuel le plus fiable et préféré de la ville, reconnu pour des soins exceptionnels aux clients, l'efficacité et un engagement envers la sécurité.",
    },
  },
  de: {
    mission: {
      title: "Mission",
      text:
        "Personalisierte, sichere und zuverlässige Transportdienstleistungen anzubieten, die sich auf Komfort und Kundenzufriedenheit konzentrieren und sicherstellen, dass jede Fahrt ein Premium-Erlebnis ist.",
    },
    vision: {
      title: "Vision",
      text:
        "Der vertrauenswürdigste und bevorzugte Einzelfahrer-Service der Stadt zu werden, bekannt für außergewöhnliche Kundenbetreuung, Effizienz und Engagement für Sicherheit.",
    },
  },
};

function Mission() {
  const { language } = useLanguage();
  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language || "en"];
    keys.forEach((k) => (value = value?.[k]));
    return value || "";
  };

  return (
    <section id="mission" className="py-16 bg-black text-white border-b-4 border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Misión */}
          <div className="text-center">
            <h3 className="text-yellow-500 text-xl font-semibold mb-4">
              {t("mission.title")}
            </h3>
            <p className="text-lg">{t("mission.text")}</p>
          </div>

          {/* Visión */}
          <div className="text-center">
            <h3 className="text-yellow-500 text-xl font-semibold mb-4">
              {t("vision.title")}
            </h3>
            <p className="text-lg">{t("vision.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;