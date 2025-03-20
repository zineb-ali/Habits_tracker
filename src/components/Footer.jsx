import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import imglogo from "../assets/img/imglogo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Slogan */}
        <div className="footer-section">
          <img src={imglogo} alt="Logo" className="footer-logo" />
          <p className="footer-tagline">Votre slogan ici</p>  <br />
        </div> <br /> <br />

        {/* Informations */}
        <div className="footer-section">
          <h3 className="footer-title">Informations</h3>
          <ul>
            <li>À propos</li>
            <li>Recherche avancée</li>
            <li>Blog</li>
            <li>Témoignages</li>
          </ul>
        </div>

        {/* Liens utiles */}
        <div className="footer-section">
          <h3 className="footer-title">Liens utiles</h3>
          <ul>
            <li>Nos services</li>
            <li>Support</li>
            <li>Conditions générales</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>

        {/* Contact & Réseaux sociaux */}
        <div className="footer-section">
          <h3 className="footer-title">Contactez-nous</h3>
          <p>📞 +212 9999 999 999</p>
          <p>📧 contact@habitstracker.com</p>
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaGoogle className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="footer-bottom">
        <p>2025 © Entreprise.Ltd | Tous droits réservés</p>
        <div className="footer-links">
          <a href="#">FAQ</a>
          <a href="#">Confidentialité</a>
          <a href="#">Conditions générales</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
