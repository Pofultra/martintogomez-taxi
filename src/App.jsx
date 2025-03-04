import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";

// Secciones del sitio
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";

// Modal de reserva
import WizardModal from "./components/WizardModal";

function App() {
  const [showWizard, setShowWizard] = useState(false);

  const openWizard = () => setShowWizard(true);
  const closeWizard = () => setShowWizard(false);

  return (
    <HelmetProvider>
      <LanguageProvider>
        
        <div className="bg-black text-white font-sans">
          <Navbar onOpenWizard={openWizard} />
          <Home onOpenWizard={openWizard} />
          <About />
          <Mission />
          <Services />
          <Footer />
          {showWizard && <WizardModal onClose={closeWizard} />}
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
