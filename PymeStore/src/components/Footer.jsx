import React from "react";
import '../styles/Footer.css'
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";


const Footer = () => {

  return (
    <footer>
      <nav className="nav-links">
        <Link to="/" className="links" onClick={() => window.scrollTo(0, 0)}>
          Home
        </Link>
        <Link to="/about" className="links" onClick={() => window.scrollTo(0, 0)}>
          Sobre nosotros
        </Link>
        <Link to="/about" className="links" onClick={() => window.scrollTo(0, 0)}>
          Terminos y condiciones
        </Link>
        <Link
            to="/login"
            className="links"
            onClick={() => window.scrollTo(0, 0)}
        >
            Inicia sesión
        </Link>
        <Link
            to="/register"
            className="links"
            onClick={() => window.scrollTo(0, 0)}
        >
            Registrate
        </Link>
      </nav>
      <nav>
        <div className="div-logos">
          <FaSquareXTwitter  className="logos" />
          <FaSquareFacebook  className="logos" />
          <FaSquareInstagram  className="logos" />
          <FaSquareYoutube  className="logos" />
        </div>
      </nav>
      <aside>
        <p>
          Copyright © 2023 - All right reserved by PymeStore
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
