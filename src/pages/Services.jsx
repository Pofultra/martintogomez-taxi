import React from 'react';
import { Phone, MessageSquare, Car,CarTaxiFront, Clock, Shield,ShieldPlus, Star, MapPin,Map, Mail, Users,Hotel,BriefcaseBusiness, Settings, Wind, Plane } from 'lucide-react';
import { useTranslation } from 'react-i18next';



const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <div className="flex items-center justify-center">
      <div className="rounded-full  bg-[#1B1B25] p-2">
        <Icon size={40} className="text-yellow-500" />
      </div>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
export const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t("services.title")}</h2>
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