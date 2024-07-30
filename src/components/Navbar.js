import React from 'react';

import './Navbar.css';
import logo from '../assets/img/logo.webp'; // Assurez-vous d'utiliser la version recadrée de l'image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <img src={logo} alt="Logo" className="logo" /> {/* Utiliser le logo */}
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#profil">Profil</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
