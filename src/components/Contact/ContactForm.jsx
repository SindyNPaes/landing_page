import React, { useState } from "react";

export default function ContactForm() {
  console.log("versão 1.02")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui você integra com EmailJS ou seu backend
    console.log("Enviando dados v3.1:", formData);

      try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: formData.name,
          to: formData.email,
          message: formData.message,
        }),
      });
      const data = await response.json();
      console.log("Resposta:", data);

      if (!response.ok) {
        console.error("Erro:", data);
        alert("Ocorreu um erro ao enviar a mensagem.");
        return;
      }

      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Erro ao conectar:", error);
      alert("Não foi possível enviar a mensagem. Tente novamente.");
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-4 w-full"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mensagem
        </label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="ml-auto bg-primary text-black font-semibold p-3 rounded-lg shadow hover:bg-black hover:text-primary transition"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
