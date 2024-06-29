// src/components/Advantages.jsx
import React from 'react';
import '../styles/Advantages.css';
import advantageImage1 from '../../public/Assets/IMG/Kelebihan 1.svg';
import advantageImage2 from '../../public/Assets/IMG/Kelebihan 2.svg';
import advantageImage3 from '../../public/Assets/IMG/Kelebihan 3.svg';

const advantages = [
  {
    number: 1,
    title: 'Resep Keluarga Autentik',
    description: 'Tempe kami dibuat dengan resep turun-temurun yang menjaga keaslian cita rasa tradisional.'
  },
  {
    number: 2,
    title: 'Bahan Baku Berkualitas',
    description: 'Kami hanya menggunakan kedelai pilihan terbaik untuk menghasilkan tempe berkualitas tinggi.'
  },
  {
    number: 3,
    title: 'Proses Produksi Higienis',
    description: 'Setiap langkah produksi kami pastikan memenuhi standar kebersihan dan kualitas yang ketat.'
  },
  {
    number: 4,
    title: 'Rasa yang Konsisten',
    description: 'Setiap potongan tempe kami penuh dengan rasa yang kaya dan konsisten, yang selalu membuat Anda kembali lagi.'
  }
];

const Advantages = () => {
  return (
    <section id="kelebihan" className="advantages-section">
      <h2 className="advantages-title">
        <span className="title-pinyon">K</span><span className="title-plus">elebihan </span>
        <span className='title-plus'>Tempe Ibu Marmi</span>
      </h2>
      <div className="advantages-images">
        <img src={advantageImage1} alt="Advantage 1" className="advantage-image-1" />
        <img src={advantageImage2} alt="Advantage 2" className="advantage-image" />
        <img src={advantageImage3} alt="Advantage 3" className="advantage-image" />
      </div>
      <div className="advantages-grid">
        {advantages.map(adv => (
          <div key={adv.number} className="advantage-item">
            <div className="advantage-number">{adv.number}</div>
            <div className="advantage-text">
              <h3 className="advantage-title">{adv.title}</h3>
              <p className="advantage-description">{adv.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
