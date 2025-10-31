import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx"
import AboutMe from "../pages/AboutMe.jsx";
import Contact from "../pages/Contact.jsx"
import Header from "../components/Header.jsx";
import ButtonWhatsapp from "../components/Button/ButtonWhatsapp.jsx";
import Footer from "../components/Footer.jsx";

export default function AppRoutes() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Header />
      <ButtonWhatsapp phone="+5542998148079" message="Olá, tudo bem? Preciso de auxílio jurídico." />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
