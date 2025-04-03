import React from 'react';
import './About.css';
import profileImage from '../assets/hotmalau.png'; // Pastikan file hotmalau.jpg ada di folder src
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Impor ikon

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">Hai, Saya Hot Rifaldo Malau</h1>
          {/* <p className="about-text">
            I'm John Alvin, a passionate developer dedicated to creating elegant and efficient digital solutions. With years of experience in full-stack development, I specialize in crafting responsive and user-friendly applications.
          </p> */}
          <p className="about-text">
          Tidak ada yang perlu dijelaskan, hubungi untuk keberlanjutan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Bagian ikon media sosial */}
          <div className="social-icons">
            <a href="https://instagram.com/fallingrf" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/r1faldo" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="about:blank" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon" />
            </a>
            <a href="mailto:hotrifaldomalau@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
          </div>

        </div>
        <div className="about-image-wrapper">
          <img
            src={profileImage} 
            alt="Profile"
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;