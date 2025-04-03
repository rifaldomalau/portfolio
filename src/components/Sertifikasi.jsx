import React, { useState } from 'react';
import './Sertifikasi.css';

function Sertifikasi() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  // Data sertifikat (sama seperti yang Anda berikan)
  const sertifikatData = [
    {
      id: 1,
      judul: "Learn CSS",
      kategori: "Programming",
      tahun: 2025,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Codecademy"
    },
    {
      id: 2,
      judul: "Learn HTML",
      kategori: "Programming",
      tahun: 2025,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Codecademy"
    },
    {
      id: 3,
      judul: "Menguasai Seni Berkomunikasi",
      kategori: "Lainnya",
      tahun: 2024,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Future Skills by Pijar Foundation"
    },
    {
      id: 4,
      judul: "Pemikiran Desain 101",
      kategori: "Lainnya",
      tahun: 2024,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Future Skills by Pijar Foundation"
    },
    {
      id: 5,
      judul: "Presentasi yang Efektif dan Memikat",
      kategori: "Lainnya",
      tahun: 2024,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Future Skills by Pijar Foundation"
    },
    {
      id: 6,
      judul: "Strategi Meningkatkan Motivasi Dan Produktivitas Dalam Dunia Kerja",
      kategori: "Lainnya",
      tahun: 2024,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Future Skills by Pijar Foundation"
    },
    {
      id: 7,
      judul: "Tips Wawancara Kerja",
      kategori: "Lainnya",
      tahun: 2024,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Future Skills by Pijar Foundation"
    },
    {
      id: 8,
      judul: "Memulai Pemrograman dengan Python",
      kategori: "Programming",
      tahun: 2024,
      masaBerlaku: "Hingga 2027",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 9,
      judul: "Bootcamp BLU Academy Batch 2",
      kategori: "Pemasaran",
      tahun: 2024,
      masaBerlaku: "Seumur Hidup",
      penerbit: "PT Bank Digital BCA (BCA Digital - BLU)"
    },
    {
      id: 10,
      judul: "Belajar Dasar Visualisasi Data",
      kategori: "Programming",
      tahun: 2023,
      masaBerlaku: "Hingga 2026",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 11,
      judul: "Memulai Pemrograman dengan Python",
      kategori: "Programming",
      tahun: 2023,
      masaBerlaku: "Hingga 2026",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 12,
      judul: "Belajar Dasar UX Design",
      kategori: "Desain",
      tahun: 2023,
      masaBerlaku: "Hingga 2026",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 13,
      judul: "Belajar Dasar Pemrograman JavaScript",
      kategori: "Programming",
      tahun: 2023,
      masaBerlaku: "Hingga 2026",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 14,
      judul: "Belajar Dasar Structured Query Language (SQL)",
      kategori: "Programming",
      tahun: 2023,
      masaBerlaku: "Hingga 2026",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 15,
      judul: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      kategori: "Programming",
      tahun: 2023,
      masaBerlaku: "Hingga 2026",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 16,
      judul: "Short Class Introduction to Data Analysis",
      kategori: "Programming",
      tahun: 2023,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 17,
      judul: "Short Class UI/UX Fundamental",
      kategori: "Desain",
      tahun: 2023,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 18,
      judul: "AWS Compute Services Overview (Indonesian)",
      kategori: "Programming",
      tahun: 2023,
      masaBerlaku: "Hingga 2026",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 19,
      judul: "Belajar Dasar Manajemen Proyek",
      kategori: "Programming",
      tahun: 2023,
      masaBerlaku: "Hingga 2026",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 20,
      judul: "AWS Academy Cloud Foundations",
      kategori: "Programming",
      tahun: 2022,
      masaBerlaku: "Hingga 2025",
      penerbit: "Dicoding Indonesia"
    },
    {
      id: 21,
      judul: "Architecting on AWS - Associate",
      kategori: "Programming",
      tahun: 2022,
      masaBerlaku: "Hingga 2025",
      penerbit: "Trainocate Indonesia"
    },
    {
      id: 22,
      judul: "The Hour of Code - Basic Concepts of Computer Science e",
      kategori: "Programming",
      tahun: 2021,
      masaBerlaku: "Seumur Hidup",
      penerbit: "Microsoft"
    }
  ];

  // Filter sertifikat berdasarkan kategori
  const filteredSertifikat = activeCategory === 'all' 
    ? sertifikatData 
    : sertifikatData.filter(item => item.kategori === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredSertifikat.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSertifikat.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to first page when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <div className="sertifikasi-container">
      <h1 className="sertifikasi-title">Sertifikasi Saya</h1>
      
      {/* Filter Kategori */}
      <div className="category-filter">
        <button 
          className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        <button 
          className={`category-btn ${activeCategory === 'Programming' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Programming')}
        >
          Programming
        </button>
        <button 
          className={`category-btn ${activeCategory === 'Desain' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Desain')}
        >
          Desain
        </button>
        <button 
          className={`category-btn ${activeCategory === 'Pemasaran' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Pemasaran')}
        >
          Pemasaran
        </button>
        <button 
          className={`category-btn ${activeCategory === 'Lainnya' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Lainnya')}
        >
          Lainnya
        </button>
      </div>
      
      {/* Daftar Sertifikat */}
      <div className="sertifikat-grid">
        {currentItems.length > 0 ? (
          currentItems.map((sertifikat) => (
            <div key={sertifikat.id} className="sertifikat-card">
              <div className="card-content">
                <h3 className="card-title">{sertifikat.judul}</h3>
                <span className="kategori-badge">{sertifikat.kategori}</span>
                <div className="card-details">
                  <p><strong>Tahun:</strong> {sertifikat.tahun}</p>
                  <p><strong>Masa Berlaku:</strong> {sertifikat.masaBerlaku}</p>
                  <p><strong>Penerbit:</strong> {sertifikat.penerbit}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">
            Tidak ada sertifikat dalam kategori ini
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredSertifikat.length > itemsPerPage && (
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

export default Sertifikasi;