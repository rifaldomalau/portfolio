import React, { useRef } from 'react';
import './Home.css';
import { MdEmail } from 'react-icons/md';

function Home() {
  // Buat ref untuk bagian Value Proposition
  const valueSectionRef = useRef(null);

  // Fungsi untuk handle scroll
  const scrollToValueSection = () => {
    valueSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  /*email*/
  const emailAddress = "hotrifaldomalau@gmail.com";
      
  const emailSubject = "Anda Kami Hire";
  const emailBody = "Halo Rifaldo,\n\nSaya tertarik dengan portofolio Anda dan ingin berdiskusi lebih lanjut tentang:\n\n[Deskripsikan tujuan Anda di sini]";
      
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Selamat Datang Calon Bos</h1>
          <p className="hero-subtitle">
            Jelajahi Keahlian Saya Dalam Satu Tempat
          </p>
          <div className="hero-cta">
            {/* Tambahkan onClick handler */}
            <button className="cta-button" onClick={scrollToValueSection}>
              Jelajahi Sekarang
            </button>
            <button className="outline-button">Tentang Saya</button>
          </div>
        </div>
      </section>

      {/* Value Proposition - Tambahkan ref disini */}
      <section className="value-section" ref={valueSectionRef}>
        <div className="value-card">
          <h3>Profesional</h3>
          <p>Pengalaman yang mumpuni dalam bidang teknologi informasi</p>
        </div>
        <div className="value-card">
          <h3>Kreatif</h3>
          <p>Berfikir luar biasa untuk solusi yang unik</p>
        </div>
        <div className="value-card">
          <h3>Cepat</h3>
          <p>Kecepatan dalam menyelesaikan adalah yang utama, Time is Money.</p>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="simple-cta">
        <h2>Siap Mempekerjakan Saya, Bos?</h2>
        {/* Tombol Email */}
        <a href={mailtoLink} className="email-button">
          <MdEmail style={{ marginRight: '8px'}} /> 
          Hubungi via Email
        </a>
      </section>
    </div>
  );
}

export default Home;