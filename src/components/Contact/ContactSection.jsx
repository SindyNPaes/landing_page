import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm.jsx";

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Entre em Contato
        </h2>
        <p className="mt-2 text-gray-600">
          Tem dúvidas ou precisa de orientação jurídica? Preencha o formulário
          abaixo e retornaremos em breve.
        </p>

        {/* Redes sociais */}
        <div className="mt-6 flex justify-center gap-6 text-2xl text-gray-600">
          <a
            href="https://www.instagram.com/adv.sindypaes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/sindy-paes-bb842a185/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+5542998148079"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Formulário */}
      <div className="max-w-3xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}
