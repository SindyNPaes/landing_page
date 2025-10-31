
const ButtonCTA = ({ phone = "+5542998148079", message = "Olá, tudo bem? Preciso de auxílio jurídico", bgBlack }) => {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
        <div className="mt-8">
          <a
            href={whatsappLink} // coloque o link do WhatsApp ou contato
            className={`inline-block px-6 py-3 rounded-xl font-semibold shadow transition-all duration-300 ease-in-out 
            ${bgBlack 
            ? "bg-black text-primary hover:bg-gray-900" 
            : "bg-primary text-black hover:bg-black hover:text-primary"}`}
          >
            Fale agora com a advogada
          </a>
        </div>
  );
};

export default ButtonCTA;
