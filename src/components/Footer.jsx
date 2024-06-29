// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import logo from '../../public/Assets/IMG/Tempe Ibu Marmi.svg';

const Footer = () => {
  return (
    <footer className="footer-section">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className="footer-copyright">
        Copyright © 2024 Tempe Ibu Marmi | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;