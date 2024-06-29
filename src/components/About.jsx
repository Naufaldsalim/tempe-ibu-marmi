// src/components/About.jsx
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="tentangkami" className="about-section">
      <h2 className="about-title">
        <span className="title-pinyon">T</span><span className="title-plus">entang </span>
        <span className='title-plus'>Tempe Ibu Marmi</span>
      </h2>
      <p className="about-description">
        <span className='boldbg'>Tempe Ibu Marmi</span> didirikan pada tahun 1985 oleh Ibu Marmi, seorang ibu rumah tangga yang berkomitmen untuk menyediakan tempe berkualitas dengan resep keluarga yang otentik.
      </p>
      <p className="about-description">
        Nama 'Ibu Marmi' sendiri diambil sebagai penghargaan terhadap dedikasi beliau dalam menjaga dan mengembangkan warisan kuliner keluarga. Berlokasi di Desak Kopen, Kabupaten Wonogiri, kami terus berupaya menghadirkan tempe terbaik ke meja makan Anda.
      </p>
    </section>
  );
};

export default About;