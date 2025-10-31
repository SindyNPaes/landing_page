import React from "react";
import perfil from "../assets/Perfil01.jpg"; 
import ButtonCTA from "../Button/ButtonCTA.jsx";

export default function AboutMeSection() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10 border-b border-gray-200">
      {/* Foto da advogada */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={perfil} // coloque sua foto dentro de public/ e ajuste o nome
          alt="Advogada Sindy Paes"
          className="rounded-2xl shadow-lg w-72 md:w-80 object-cover"
        />
      </div>

      {/* Texto */}
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Sindy Paes
        </h2>
        <p className="text-lg text-primary font-medium mt-2">
          “Atuação jurídica estratégica, com foco em resultados e confiança.”
        </p>

        <p className="text-gray-700 my-4">
            Advogada formada pela{" "}
            <span className="font-semibold">Universidade Estadual de Ponta Grossa</span>, 
            com experiência em <span className="font-semibold">Direito Civil</span>,{" "}
            <span className="font-semibold">Direito Médico e da Saúde</span>,{" "}
            <span className="font-semibold">Direito do Consumidor</span> e{" "}
            <span className="font-semibold">Direito de Família</span>.
          </p>

          <p className="text-gray-700 my-6">
            Minha prática é marcada pela busca de soluções ágeis, claras e
            personalizadas, sempre com foco na confiança e na defesa dos
            interesses de cada cliente.
          </p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-black">Áreas de Atuação:</h3>
          <ul className="mt-2 text-gray-700 space-y-1">
            <li>⚖️ Direito Médico e da Saúde</li>
            <li>📜 Direito Civil</li>
            <li>🛒 Direito do Consumidor</li>
            <li>👨‍👩‍👧‍👦 Direito de Família</li>
          </ul>

        </div>

        {/* CTA */}
        <ButtonCTA />
      </div>
    </section>
  );
}
