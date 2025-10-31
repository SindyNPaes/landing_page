import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LINKS RÁPIDOS */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">LINKS RÁPIDOS</h3>
          <div className="grid grid-cols-2 gap-6">
            {/* Coluna 1 */}
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">Sobre mim</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
            {/* Coluna 2 */}
            <ul className="flex gap-4 text-2xl flex-col items-end md:items-center">
              <li>
                <a
                  href="https://www.instagram.com/adv.sindypaes/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pink-600 transition-colors"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sindy-paes-bb842a185/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-700 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+5542998148079"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CONTATO */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">CONTATO</h3>
          <ul className="space-y-2 text-white">
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <span>contato@sindypaes.adv.br</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <span>(42) 99814-8079</span>
            </li>
          </ul>
        </div>

        {/* HORÁRIOS */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">HORÁRIOS</h3>
          <ul className="space-y-1 text-white">
            <li className="flex justify-between"><span>Segunda-feira</span><span>09:00 - 17:00</span></li>
            <li className="flex justify-between"><span>Terça-feira</span><span>09:00 - 17:00</span></li>
            <li className="flex justify-between"><span>Quarta-feira</span><span>09:00 - 17:00</span></li>
            <li className="flex justify-between"><span>Quinta-feira</span><span>09:00 - 17:00</span></li>
            <li className="flex justify-between"><span>Sexta-feira</span><span>09:00 - 17:00</span></li>
            <li className="flex justify-between"><span>Sábado</span><span>Fechado</span></li>
            <li className="flex justify-between"><span>Domingo</span><span>Fechado</span></li>
          </ul>
        </div>

      </div>

      {/* Created by */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm text-gray-400">
        © 2025 Sindy Paes. Created by{" "}
        <a href="https://github.com/GustavoPucienik" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
          Gustavo Gomes
        </a>
      </div>
    </footer>
  );
}
