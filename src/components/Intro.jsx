import React from 'react';
import '../styles/Intro.css';
import introImage from '../../public/Assets/IMG/teeemmmpehhh.svg'; 
import { Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div id="beranda" className="intro-section">
      <h2 className="intro-title">
        <span className="title-pinyon">T</span><span className="title-plus">empe </span>
        <span className="title-pinyon">I</span><span className="title-plus">bu </span>
        <span className="title-pinyon">M</span><span className="title-plus">armi</span>
      </h2>
      <p className="intro-tagline">Cita Rasa Tradisional, Kualitas Istimewa</p>
      <p className="intro-description">
        Selamat datang di Tempe Ibu Marmi, tempat Anda menemukan tempe lezat yang dibuat dengan cinta dan resep tradisional keluarga. 
        Nikmati keunikan rasa tempe yang telah menjadi favorit banyak keluarga.
      </p>
      <img src={introImage} alt="Intro" className="intro-image"/>
    </div>
  );
};

export default Intro;