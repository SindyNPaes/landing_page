import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "../assets/HamburgerIcon";
import logo from "../assets/LOGO_SMALL.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="h-[120px] p-5 bg-white flex items-center justify-between border-b-2 border-primary drop-shadow-2xl relative z-50">
        {/* Logo */}
        <div className="flex items-center h-[80px] w-[92px]">
          <img src={logo} alt="Logo da advogada" className="h-[80px] w-[92px]" />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex  justify-around space-x-8 font-medium text-[1.25rem] text-[#333]  w-1/3">
          <Link to="/" className="hover:text-primary transition-colors duration-300">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors duration-300">Sobre mim</Link>
          <Link to="/contact" className="hover:text-primary transition-colors duration-300">Contato</Link>
        </nav>

        {/* Hamburger Icon Mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu}>
            <HamburgerIcon className="w-[40px] h-[40px]" />
          </button>
        </div>
      </header>

      {/* Menu Mobile Fullscreen */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-8 z-40`}
      >
        <Link
          to="/"
          onClick={toggleMenu}
          className="text-2xl font-medium hover:text-primary transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={toggleMenu}
          className="text-2xl font-medium hover:text-primary transition-colors duration-300"
        >
          Sobre mim
        </Link>
        <Link
          to="/contact"
          onClick={toggleMenu}
          className="text-2xl font-medium hover:text-primary transition-colors duration-300"
        >
          Contato
        </Link>
      </div>

      {/* Overlay escuro */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/40 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
