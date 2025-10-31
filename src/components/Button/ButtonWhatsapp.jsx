import whatsappImg from "../../assets/whatsapp-svgrepo-com.svg";
const ButtonWhatsapp = ({ phone, message = "Olá, tudo bem? Preciso de auxílio jurídico." }) => {
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300 z-10"
    >
      <img src={whatsappImg} alt="Advogada" className="h-6 w-6 mr-2" />
      <span>WhatsApp</span>
    </a>
  );
};

export default ButtonWhatsapp;
