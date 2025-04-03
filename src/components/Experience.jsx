import React, { useState } from 'react';
import './Experience.css';
import uajyLogo from '../assets/uajy-logo.png';
import gmdLogo from '../assets/gmd-logo.jpg';
import himaLogo from '../assets/himaforka.png';
import yriLogo from '../assets/yriLogo.png';
import novoLogo from '../assets/novo-logo.png';
import yotLogo from '../assets/yotLogo.png';
import ksrLogo from '../assets/ksrLogo.jpg';
import ppiLogo from '../assets/ppiLogo.png';
import xlLogo from '../assets/xlLogo.png';
import bluLogo from '../assets/bluLogo.png';
import sagasitasLogo from '../assets/sagasitasLogo.png';

function Experience() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // 3x3 grid

  // Data pengalaman (sama seperti sebelumnya)
  const experiences = [
    {
      id: 1,
      nama: "Student Staff Wakil Dekan 1",
      institusi: "Fakultas Teknologi Industri UAJY",
      logo: uajyLogo,
      tanggal: "Januari 2025 - Sekarang",
      keahlian: ["Desain Grafis", "Sosial Media", "Manajemen"]
    },
    {
      id: 2,
      nama: "Mentor Manager",
      institusi: "Gerakan Mengajar Desa",
      logo: gmdLogo,
      tanggal: "September 2024 - Maret 2025",
      keahlian: ["Figma", "UX Research", "Prototyping"]
    },
    {
      id: 3,
      nama: "Dewan Tetap KOMINFO",
      institusi: "Himpunan Mahasiswa Informatika (HIMAFORKA)",
      logo: himaLogo,
      tanggal: "Agustus 2024 - Agustus 2025",
      keahlian: ["Videografi", "Dokumentasi", "Desain Grafis"]
    },
    {
      id: 4,
      nama: "Anggota KOMINFO",
      institusi: "Himpunan Mahasiswa Informatika (HIMAFORKA)",
      logo: himaLogo,
      tanggal: "September 2024 - September 2025",
      keahlian: ["Videografi", "Dokumentasi", "Desain Grafis"]
    },
    {
      id: 5,
      nama: "Anggota Youth Ranger Indonesia",
      institusi: "Youth Ranger Indonesia",
      logo: yriLogo,
      tanggal: "September 2023 - September 2024",
      keahlian: ["Leadership", "Komunikasi"]
    },
    {
      id: 6,
      nama: "Novo Rangers Batch 3",
      institusi: "Novo Club by Paragon Corp",
      logo: novoLogo,
      tanggal: "Februari 2024 - September 2024",
      keahlian: ["Leadership", "Komunikasi", "Problem Solving"]
    },
    {
      id: 7,
      nama: "Koordinator Bidang Teknologi",
      institusi: "Young On Top Yogyakarta",
      logo: yotLogo,
      tanggal: "Januari 2024 - September 2024",
      keahlian: ["Leadership", "Komunikasi", "Kerjasama Tim"]
    },
    {
      id: 8,
      nama: "Anggota Kelompok Studi Robotika",
      institusi: "KSR UAJY",
      logo: ksrLogo,
      tanggal: "September 2023 - September 2024",
      keahlian: ["C Language", "IOT"]
    },
    {
      id: 9,
      nama: "Delegasi PPI Institute 2024",
      institusi: "PPI Dunia (OISAA)",
      logo: ppiLogo,
      tanggal: "Januari 2024 - Februari 2024",
      keahlian: ["Ekonomi", "Leadership", "Politik"]
    },
    {
      id: 10,
      nama: "Moderator Seminar Online XL Future Leaders",
      institusi: "XL Axiata Future Leaders",
      logo: xlLogo,
      tanggal: "Desember 2023 - Desember 2023",
      keahlian: ["Public Speaking", "Leadership", "Kerjasama Tim"]
    },
    {
      id: 11,
      nama: "Brand Ambassador Blu by BCA UAJY",
      institusi: "PT Bank Digital BCA (BCA Digital)",
      logo: bluLogo,
      tanggal: "September 2023 - Desember 2023",
      keahlian: ["Brand Ambassadorship", "Komunikasi", "Promosi"]
    },
    {
      id: 12,
      nama: "Master Trainer",
      institusi: "Yayasan Sagasitas Indonesia",
      logo: sagasitasLogo,
      tanggal: "Juli 2021 - Oktober 2023",
      keahlian: ["Trainer", "Cloud Computing", "AWS"]
    },
    {
      id: 12,
      nama: "Volunteer Sagasitas",
      institusi: "Yayasan Sagasitas Indonesia",
      logo: sagasitasLogo,
      tanggal: "Juni 2021 - Juli 2021",
      keahlian: ["Volunteer", "Artificial Intelligence", "AWS"]
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(experiences.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = experiences.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="experience-container">
      <h1 className="experience-title">Pengalaman Saya</h1>
      
      <div className="experience-grid">
        {currentItems.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <img 
                src={exp.logo} 
                alt={`Logo ${exp.institusi}`} 
                className="company-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = 
                    `<div class="logo-placeholder">
                      ${exp.institusi.split(' ').map(w => w[0]).join('')}
                     </div>`;
                }}
              />
              <div className="experience-info">
                <h3>{exp.nama}</h3>
                <p className="company-name">{exp.institusi}</p>
              </div>
            </div>
            
            <p className="experience-date">{exp.tanggal}</p>
            
            <div className="skills-container">
              {exp.keahlian.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {experiences.length > itemsPerPage && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`page-btn ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Experience;