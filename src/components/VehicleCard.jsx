// components/About/VehicleCard.jsx
import React from "react";
import * as LucideIcons from "lucide-react";
import { ImageSlider } from "../ui/ImageSlider";

export const VehicleCard = ({ vehicle, isActive }) => {
  return (
    <div
      className={`
        relative bg-white rounded-3xl shadow-xl overflow-hidden
        w-[400px] transition-all duration-500 transform-gpu
        ${isActive ? "scale-105 shadow-2xl" : "scale-100 shadow-lg"}
        hover:scale-105 hover:shadow-2xl
      `}
    >
      {/* Imagen del vehículo */}
      <ImageSlider images={vehicle.images} />

      {/* Contenido */}
      <div className="p-6 pb-8">
        {/* Nombre del vehículo */}
        <h3
          className="text-3xl font-bold mb-4 text-gray-900"
        >
          {vehicle.name}
        </h3>

        {/* Capacidad */}
        <div
          className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          {vehicle.capacity}
        </div>

        {/* Características */}
        <div className="grid grid-cols-2 gap-4 max-h-[150px] overflow-y-auto">
          {vehicle.features.map((feature, index) => {
            const Icon = LucideIcons[feature.icon];
            return (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg transition-transform duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
              >
                <Icon size={20} className="text-yellow-500" />
                <span className="text-sm font-medium text-gray-800">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Efecto de borde activo */}
      {isActive && (
        <div
          className="absolute inset-0 border-4 border-yellow-500 rounded-3xl pointer-events-none"
          style={{ boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)" }}
        ></div>
      )}
    </div>
  );
};