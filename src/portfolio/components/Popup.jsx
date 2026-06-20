import React from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../useLanguage";

function Popup({ onClose }) {
  const { t } = useLanguage();

  return (
    <div className="portfolio-popup-overlay">
      <div className="portfolio-popup-content">
        <button
          className="popup-close-btn"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <h3>Hello ! 👋</h3>
        <p>
          I'm actively seeking a Technical Product Owner Internship in Paris
          -starting July 2027. If you’re looking for a driven team player to
          scale your product together, or just want to chat about product
          growth, please feel free to reach out below!
        </p>

        <div className="popup-contact-button">
          <a href="mailto:haminlee.official@gmail.com">
            <h4>Email Me ↗</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;
