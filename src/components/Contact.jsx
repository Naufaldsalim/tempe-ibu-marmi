// src/components/Contact.jsx
import React from 'react';
import '../styles/Contact.css';
import contactImage from '../../public/Assets/IMG/Contact Us.svg';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { SiShopee } from "react-icons/si";

const Contact = () => {
  return (
    <section id="hubungikami" className="contact-section">
      <h2 className="contact-title">
        <span className="title-pinyon">H</span><span className="title-plus">ubungi Kami</span>
      </h2>
      <p className="contact-description">
        Kami siap melayani Anda untuk informasi lebih lanjut atau pesanan tempe. Jangan ragu untuk menghubungi kami melalui kontak berikut:
      </p>
      <div className="contact-cta">
        <a href="https://wa.me/6281287989971" className="contact-link">
          <FaWhatsapp /> +62 812 8798 9971
        </a>
        <a href="https://www.instagram.com/tempeibumarmi" className="contact-link">
          <FaInstagram /> @tempeibumarmi
        </a>
        <a href="https://shopee.co.id/tempeibumarmi" className="contact-link">
          <SiShopee /> @tempeibumarmi
        </a>
      </div>
      <img src={contactImage} alt="Contact Background" className="contact-background" />
    </section>
  );
};

export default Contact;
