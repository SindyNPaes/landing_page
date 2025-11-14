import React, { useState } from "react";
import notifySuccess from "../Notify/notifySuccess";
import notifyError from "../Notify/notifyError";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      notifyError("Por favor, informe seu nome.");
      return false;
    }

    if (formData.name.trim().length < 3) {
      notifyError("O nome deve ter pelo menos 3 caracteres.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      notifyError("Informe um email válido.");
      return false;
    }

    if (!formData.message.trim()) {
      notifyError("A mensagem não pode estar vazia.");
      return false;
    }

    if (formData.message.length < 10) {
      notifyError("A mensagem deve conter pelo menos 10 caracteres.");
      return false;
    }

    return true; // tudo certo ✔
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 🔐 bloqueia envio se a validação falhar
    if (!validateForm()) return;

      try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      }); 
      const data = await response.json();

      if (!response.ok) {
        notifyError("Ocorreu um erro ao enviar a mensagem.");
        return;
      }

      notifySuccess("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      notifySuccess("Mensagem enviada com sucesso!");
      notifyError("Não foi possível enviar a mensagem.");
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
