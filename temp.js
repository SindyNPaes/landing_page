import React from "react";
import perfil from "../assets/Perfil01.jpg";

export default function AboutMe() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src={perfil}
            alt="Foto da advogada"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sindy Paes – Advocacia e Consultoria Jurídica
          </h2>
          <p className="text-lg text-gray-600 italic mb-6">
            “Atuação jurídica estratégica, com foco em resultados e confiança.”
          </p>

          <p className="text-gray-700 mb-4">
            Advogada formada pela{" "}
            <span className="font-semibold">Universidade Estadual de Ponta Grossa</span>, 
            com experiência em <span className="font-semibold">Direito Civil</span>,{" "}
            <span className="font-semibold">Direito Médico e da Saúde</span>,{" "}
            <span className="font-semibold">Direito do Consumidor</span> e{" "}
            <span className="font-semibold">Direito de Família</span>.
          </p>

          <p className="text-gray-700 mb-6">
            Minha prática é marcada pela busca de soluções ágeis, claras e
            personalizadas, sempre com foco na confiança e na defesa dos
            interesses de cada cliente.
          </p>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">
              Áreas de Atuação:
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Direito Civil</li>
              <li>Direito Médico e da Saúde</li>
              <li>Direito do Consumidor</li>
              <li>Direito de Família</li>
            </ul>
          </div>

          <button className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-md hover:bg-[#b48727] transition">
            Fale agora com a advogada
          </button>
        </div>
      </div>
    </section>
  );
}
