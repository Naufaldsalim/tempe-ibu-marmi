// src/components/Testimonials.jsx
import React from 'react';
import '../styles/Testimonials.css';
import testimonialImage from '../../public/Assets/IMG/What They Say.svg';

const testimonials = [
  { name: 'Rama Yulianto - Bandung', quote: 'Tempe Ibu Marmi benar-benar enak dan berkualitas. Selalu menjadi pilihan utama saya untuk lauk di rumah.' },
  { name: 'Budi, Jakarta', quote: 'Saya suka karena rasa tempe ini tidak berubah sejak pertama kali mencobanya. Selalu lezat!' },
  { name: 'Siti, Surabaya', quote: 'Kualitasnya tidak pernah mengecewakan. Anak-anak saya juga suka!' },
  { name: 'Agus, Yogyakarta', quote: 'Tempe dengan rasa tradisional yang otentik, mengingatkan saya pada masa kecil.' },
  { name: 'Mira, Semarang', quote: 'Tempe terbaik yang pernah saya coba. Teksturnya pas dan rasanya sangat alami.' },
  { name: 'Toni, Malang', quote: 'Saya suka beli tempe ini untuk acara keluarga. Semua selalu menikmatinya.' },
  { name: 'Fauzan, Solo', quote: 'Rasa dan kualitasnya sangat terjaga. Sangat direkomendasikan!' },
  { name: 'Dewi, Bali', quote: 'Tempe ini punya rasa yang khas dan unik. Saya selalu mencarinya.' }
];

const Testimonials = () => {
  return (
    <section id="testimoni" className="testimonials-section">
      <h2 className="testimonials-title">
        <span className="title-pinyon">A</span><span className="title-plus">pa Kata Mereka </span>
        <span className='title-plus'>Tentang Tempe Ibu Marmi?</span>
      </h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-background-container">
        <img src={testimonialImage} alt="Background" className="testimonial-background" />
      </div>
    </section>
  );
};

export default Testimonials;
