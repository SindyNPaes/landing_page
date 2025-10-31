import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    emoji: "🏥",
    title: "Direito Médico",
    description: "Defesa de pacientes, planos de saúde e demandas hospitalares",
  },
  {
    emoji: "⚖️",
    title: "Direito Civil",
    description: "Contratos, indenizações e obrigações legais",
  },
  {
    emoji: "🛒",
    title: "Consumidor",
    description: "Problemas com compras, serviços e relações de consumo",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    title: "Família",
    description: "Divórcio, guarda, pensão alimentícia e inventário",
  },
];

const FeatureGrid = () => {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          emoji={feature.emoji}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureGrid;
