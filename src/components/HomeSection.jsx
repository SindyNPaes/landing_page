import React from "react";
import ButtonCTA from "../components/Button/ButtonCTA";

export default function HomeSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-120px)] md:min-h-screen bg-primary flex flex-col items-center justify-start md:justify-center px-6 md:px-12 lg:px-20 py-16 bg-cover bg-center"
    style={{ backgroundImage: "url('../assets/background00.png')" }}>

      <div className="absolute inset-0 bg-black/40 h-full"></div>
      {/* Boas-vindas */}
      <div className="relative text-center mb-8">
        <p className="text-gray-100 text-lg md:text-2xl font-semibold uppercase tracking-wider">
          Seja bem-vindo(a) à
        </p>
      </div>

      {/* Conteúdo principal */}
      <div className="relative max-w-4xl text-center mb-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title font-bold text-gray-100 leading-tight md:leading-snug">
          Sindy Paes –<br className="block md:hidden" /> Advocacia e Consultoria Jurídica
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-100 font-body leading-relaxed md:leading-loose">
          Soluções jurídicas <span className="font-semibold text-primary">eficientes, éticas e personalizadas</span>, garantindo clareza e confiança em cada etapa do processo.
        </p>

        {/* CTA integrado ao texto */}
        <div className="relative mt-10">
          <ButtonCTA 
          //bgBlack
          message="Olá, tudo bem? Preciso de auxílio jurídico"
          />
        </div>
      </div>
    </section>
  );
}
