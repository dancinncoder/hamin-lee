import { useEffect } from "react";
import "./Portfolio.css";
import LanguageProvider from "./LanguageProvider";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FrontendSection from "./components/FrontendSection";
import MarketingSection from "./components/MarketingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

export default function Portfolio({ popupBoolean, setPopupBoolean }) {
  useEffect(() => {
    // 1. scoll behavior smooth for the whole page
    document.documentElement.style.scrollBehavior = "smooth";

    // 2. after 10s, show the popup
    const timer = setTimeout(() => {
      setPopupBoolean(true);
    }, 10000);

    // timer cleanup
    return () => {
      document.documentElement.style.scrollBehavior = "";
      clearTimeout(timer);
    };
  }, [setPopupBoolean]);

  return (
    <LanguageProvider>
      <div className="portfolio">
        <Nav onOpenPopup={() => setPopupBoolean(true)} />
        <Hero />
        <AboutSection />
        <FrontendSection />
        <MarketingSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
      <div>
        {popupBoolean && <Popup onClose={() => setPopupBoolean(false)} />}
      </div>
    </LanguageProvider>
  );
}
