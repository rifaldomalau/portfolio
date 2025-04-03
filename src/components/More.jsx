import { useState } from 'react';
import { 
  FaUniversity, 
  FaBriefcase, 
  FaTrophy, 
  FaCode,
  FaChevronDown,
  FaChevronUp,
  FaEye,
  FaEyeSlash 
} from 'react-icons/fa';
import { CiMedal } from "react-icons/ci";
import './More.css';
import uajyLogo from '../assets/uajy-logo.png';
import unairLogo from '../assets/unairLogo.png';
import ugmLogo from '../assets/ugmLogo.png';
import lsprLogo from '../assets/lsprLogo.png';
import swuLogo from '../assets/swuLogo.png';
import iteLogo from '../assets/iteLogo.png';
import kpbbLogo from '../assets/kpbbLogo.png';
import ranknesiaLogo from '../assets/ranknesiaLogo.jpg';
import latarLogo from '../assets/latarLogo.jpg';
import pesLogo from '../assets/pesLogo.png';

// Sample data
const educationData = [
  {
    id: 1,
    logo: uajyLogo,
    institution: 'Universitas Atma Jaya Yogyakarta',
    degree: 'Strata 1',
    field: 'Informatika',
    startDate: 'Agustus 2023',
    endDate: 'Sekarang',
    grade: 'GPA: Dirahasiakan',
    actualGpa: 'GPA: 3.66/4.00'
  },
  {
    id: 2,
    logo: unairLogo,
    institution: 'Universitas Airlangga',
    degree: 'Future Skills x JobHun',
    field: 'Jobhun Digital Marketing',
    startDate: 'Maret 2025',
    endDate: 'Mei 2025',
    grade: 'Grade: Soon',
    actualGpa: 'Grade: Soon'
  },
  {
    id: 3,
    logo: ugmLogo,
    institution: 'Universitas Gadjah Mada',
    degree: 'Future Skills x Narasi Academy',
    field: 'Individual Journalist: Amplifying Voices for Civil Society',
    startDate: 'September 2024',
    endDate: 'Desember 2024',
    grade: 'Grade: A-',
    actualGpa: 'Grade: A-'
  },
  {
    id: 4,
    logo: ugmLogo,
    institution: 'Universitas Gadjah Mada',
    degree: 'Future Skills x UM Indonesia',
    field: 'Futureproofing Media Advertising with Science & Art',
    startDate: 'Maret 2024',
    endDate: 'Juni 2024',
    grade: 'Grade: A-',
    actualGpa: 'Grade: A-'
  },
  {
    id: 5,
    logo: lsprLogo,
    institution: 'LSPR Institute',
    degree: 'Sit in Class',
    field: 'International Law',
    startDate: 'Desember 2023',
    endDate: 'Desember 2023',
    // grade: 'Grade: A-',
    // actualGpa: 'Grade: A-'
  },
  {
    id: 6,
    logo: lsprLogo,
    institution: 'LSPR Institute',
    degree: 'Sit in Class',
    field: 'Etiquette Protocol & MC',
    startDate: 'Desember 2023',
    endDate: 'Desember 2023',
    // grade: 'Grade: A-',
    // actualGpa: 'Grade: A-'
  },
  {
    id: 7,
    logo: swuLogo,
    institution: "Seoul Women's University",
    degree: 'Intercultural Dialogue',
    field: "Intercultural Dialogue: Korean and Indonesian Students \"Let's Paint Together #2",
    startDate: 'Oktober 2023',
    // endDate: 'November 2023',
    // grade: 'Grade: A-',
    // actualGpa: 'Grade: A-'
  },
  {
    id: 8,
    logo: unairLogo,
    institution: 'Universitas Airlangga',
    degree: 'Future Skills x PT Jobhun Membangun Indonesia',
    field: 'Founders Preparation Bootcamp',
    startDate: 'Oktober 2023',
    endDate: 'Desember 2023',
    grade: 'Grade: D-',
    actualGpa: 'Grade: D-'
  },
  {
    id: 9,
    logo: ugmLogo,
    institution: 'Universitas Gadjah Mada',
    degree: 'Future Skills x XL Axiata Future Leaders (XLFL)',
    field: 'Leadership and Soft Skills Development Class',
    startDate: 'September 2023',
    endDate: 'Desember 2023',
    grade: 'Grade: A-',
    actualGpa: 'Grade: A-'
  },
  {
    id: 10,
    logo: iteLogo,
    institution: 'Institute of Technical Education',
    degree: 'Study Abroad',
    field: 'SL2 (Sustainability Living Lab) Workshop, make AI Drone, make Intel OpenBot',
    startDate: 'Desember 2022',
    endDate: 'Desember 2022',
    grade: 'Grade: A',
    actualGpa: 'Grade: A'
  },
];

const experienceData = [
  {
    id: 1,
    logo: kpbbLogo,
    organization: 'Kantor Pelatihan Bahasa dan Budaya UAJY',
    position: 'Pendamping Kelompok Jogja Istimewa',
    type: 'Volunteer',
    startDate: 'September 2024',
    endDate: 'Desember 2024',
    description: 'Program Jogja Istimewa merupakan program pengenalan budaya Daerah Istimewa Yogyakarta, seperti Nembang, Gamelan, Wayang, dan lain-lain. Saya menjadi pendamping kelompok untuk mendampingi siswa yang mengikuti kegiatan tersebut.'
  },
  {
    id: 2,
    logo: uajyLogo,
    organization: 'Universitas Atma Jaya Yogyakarta',
    position: 'Trainer Computational Thinking',
    type: 'Volunteer',
    startDate: 'Juli 2024',
    endDate: 'Juli 2024',
    description: 'Memberikan materi Computational Thinking selama 2 hari untuk siswa SMP. Program rutin ini diselenggarakan oleh Universitas Atma Jaya Yogyakarta untuk sekolah-sekolah di Yogyakarta. Sebagai trainer, tugas saya adalah membuat materi, menulis pertanyaan, dan menjelaskan materi kepada siswa.'
  },
  {
    id: 3,
    logo: uajyLogo,
    organization: 'Universitas Atma Jaya Yogyakarta',
    position: 'Promotor UAJY',
    type: 'Volunteer',
    startDate: 'Desember 2023',
    endDate: 'Januari 2024',
    description: 'Program ini mempromosikan Universitas Atma Jaya Yogyakarta ke SMA sasaran. Beberapa hal yang dilakukan untuk menyukseskan acara ini adalah membuat surat promosi untuk kunjungan ke SMA dan promosi langsung di sekolah selama Campus Expo.'
  },
  {
    id: 4,
    logo: ranknesiaLogo,
    organization: 'RankNesia',
    position: 'Owner',
    type: 'Side Job',
    startDate: 'Januari 2024',
    endDate: 'Sekarang',
    description: 'Memberikan informasi, pemeringkatan, dan tips Perguruan Tinggi di Sosial Media'
  },
  {
    id: 5,
    logo: latarLogo,
    organization: 'LatarData',
    position: 'Owner',
    type: 'Side Job',
    startDate: 'Januari 2024',
    endDate: 'Sekarang',
    description: 'Memberikan informasi, pemeringkatan, dan tips dalam segala topik di Sosial Media'
  },
  {
    id: 6,
    logo: pesLogo,
    organization: 'SEPUH PES',
    position: 'By One PES PC?',
    type: '',
    startDate: 'Sejak Hobi',
    endDate: 'Sekarang',
    description: ''
  }
];

const achievementData = [
  {
    id: 1,
    title: 'Finalis Ambassador CIMB Niaga Digital Lounge Campus',
    organizer: 'CIMB Niaga',
    year: '2023',
    description: 'Digital Lounge merupakan konsep terbaru dari Digital Lounge CIMB Niaga yang menawarkan pengalaman perbankan digital yang lebih lengkap dan nyaman bagi Anda dan keluarga. Selain nyaman, jam operasionalnya pun sangat fleksibel dan mudah dijangkau dari area pemukiman. Saya menjadi Finalis Duta Digital Lounge CIMB Niaga.'
  },
  {
    id: 2,
    title: 'Juara UI/UX of Pemikiran Desain dan Kreativitas 23/24',
    organizer: 'Informatika UAJY',
    year: '2023',
    description: 'Meraih penghargaan prototipe aplikasi terbaik pada pameran kursus "Design Thinking and Creativity" 2023/2024. Pameran ini diselenggarakan dalam rangka mempromosikan dan memamerkan produk-produk yang dihasilkan dari kursus tersebut. Aplikasi prototipe yang dibuat adalah aplikasi Paket Wisata yang bertujuan untuk memudahkan perjalanan dengan paket-paket yang disediakan.'
  },
  {
    id: 3,
    title: 'Juara 3 Imagine Cup Junior Local Competition',
    organizer: 'Intel x MariBelajar',
    year: '2022',
    description: 'Membuat Kecerdasan Buatan menggunakan bahasa pemrograman Python dengan judul proyek "Identifikasi Warisan Budaya".'
  },
  {
    id: 4,
    title: 'Juara 2 Video Pendek Kawasan Warisan Budaya',
    organizer: 'Dinas Kebudayaan DIY',
    year: '2021',
    description: 'Kompetisi Video Pendek Kawasan Cagar Budaya (Kotagede- Pleret - Imogiri) Temukan Harta Karun Mataram Islam.'
  },
  {
    id: 5,
    title: 'Juara Favorit Kompetisi Video Kreatif Tingkat Nasional',
    organizer: 'PT. Intav Prima Solusindo',
    year: '2021',
    description: 'Hasil luar biasa dalam Kompetisi Video Kreatif yang diselenggarakan oleh PT INTAV PRIMA SOLUSINDO, dalam rangka peringatan Hari Kemerdekaan Republik Indonesia ke-76. Sertifikat ini diberikan pada 10 September 2021 di Jakarta.'
  },
  {
    id: 6,
    title: 'Medali Emas OSN GYA Tingkat Nasional SLTA',
    organizer: 'Global Youth Action',
    year: '2021',
    description: 'Peraih Medali Emas dalam Olimpiade Sains Nasional bidang Komputer, yang diselenggarakan oleh Global Youth Action pada tingkat SMA/SMK/MA secara daring pada 12 September 2021. Skor: 92.'
  },
  {
    id: 7,
    title: 'Diploma Nasional Olimpiade Pemrograman Indonesia ke-3',
    organizer: 'Bandung Creative Society',
    year: '2021',
    description: 'Meraih Medali Perunggu dalam Olimpiade Pemrograman Indonesia tingkat SMA nasional, yang diselenggarakan secara daring pada 22-29 Agustus 2021.'
  },
  {
    id: 8,
    title: 'Kompetisi Penelitian Siswa Indonesia (KOPSI) Tingkat Provinsi',
    organizer: 'Disdikpora DIY',
    year: '2021',
    description: 'Mengembangkan aplikasi konsultasi kesehatan gratis menggunakan bahasa pemrograman Java.'
  }
];

const projectData = [
  {
    id: 1,
    name: 'Track Record Website (Politrack)',
    date: 'Desember 2023',
    description: 'Membuat desain situs web untuk mengikuti kompetisi Hackathon dari NAKARA. Kompetisi ini bertujuan untuk meningkatkan Literasi Digital untuk Pemilu 2024.',
    technologies: ['Figma']
  },
  {
    id: 2,
    name: 'Tripindo',
    date: 'Oktober 2023 - Desember 2023',
    description: 'Tripindo merupakan prototipe aplikasi yang dibuat untuk memudahkan perjalanan, di mana setiap wisata yang dipilih sudah termasuk transportasi dan akomodasi, sehingga masyarakat yang ingin berlibur tidak perlu repot mencari hal-hal di luar wisata.',
    technologies: ['Figma']
  },
  {
    id: 3,
    name: 'Roll & Cook',
    date: 'Agustus 2023 - Oktober 2023',
    description: 'Membuat permainan bertema makanan. Permainan ini terinspirasi dari orang-orang yang sedang bingung menentukan makanan apa yang akan dimasak hari itu. Dengan melempar dadu, masing-masing pihak akan mendapatkan bahan dan bumbu. Dalam permainan ini, pemain dapat berkreasi dengan bahan-bahan yang diperolehnya.',
    technologies: ['Figma', 'Blender 3D']
  },
  {
    id: 4,
    name: 'Music Voice Changer',
    date: 'Januari 2023 - Mei 2023',
    description: 'Proyek Artificail Intelligence ini saya buat hanya untuk kesenangan semata. Fungsinya dapat mengubah suara penyanyi asli lagu, atau bisa disebut AI Song Cover.',
    technologies: ['Python']
  },
  {
    id: 5,
    name: 'Free Health App Consultation',
    date: 'November 2022 - Januari 2023',
    description: 'Konsultasi pengembangan aplikasi kesehatan gratis. Proyek ini dibuat saat mengikuti kompetisi KOPSI dari Puspresnas.',
    technologies: ['Kotlin']
  },
  {
    id: 6,
    name: 'Cultural Heritage Identify',
    date: 'Desember 2022',
    description: 'Mendeteksi dan mengidentifikasi motif/pola batik menggunakan bahasa Python.',
    technologies: ['Python', 'HTML', 'CSS']
  },
  {
    id: 7,
    name: 'Web Disease Detector & Identification',
    date: 'September 2021 - Desember 2021',
    description: 'Project Artificial Intelligence ini dibuat pada ajang Intel Prakarsa Muda 2021 di Yogyakarta. Project ini dibuat dengan tujuan untuk mendeteksi dan mengidentifikasi hasil CT Scan/MRI. Pada web ini terdapat 5 kategori yang dapat dideteksi dan diidentifikasi.',
    technologies: ['Python', 'Kaggle', 'AI']
  }
];

const More = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [showAll, setShowAll] = useState(false);
  const [showGpa, setShowGpa] = useState(false);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [accessError, setAccessError] = useState('');

  const handleShowGpa = () => {
    if (showGpa) {
      // If GPA is already showing, hide it
      setShowGpa(false);
    } else {
      // If GPA is hidden, show code input modal
      setShowCodeInput(true);
    }
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (accessCode === '6666') {
      // Correct code - show GPA and hide modal
      setShowGpa(true);
      setShowCodeInput(false);
      setAccessError('');
    } else {
      // Wrong code - show error
      setAccessError('Anda tidak diijinkan');
    }
    setAccessCode('');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="items-container">
            {educationData.slice(0, showAll ? educationData.length : 5).map((item) => (
              <div key={item.id} className="item-card">
                <div className="item-header">
                  <div className="item-logo">
                    <img src={item.logo} alt={item.institution} />
                  </div>
                  <div className="item-info">
                    <h3>{item.institution}</h3>
                    <div className="item-meta">
                      <span>{item.startDate} - {item.endDate}</span>
                      <span className="grade">
                        {showGpa ? item.actualGpa : item.grade}
                        <button 
                          onClick={handleShowGpa} 
                          className="gpa-toggle"
                          aria-label={showGpa ? 'Sembunyikan GPA' : 'Lihat GPA'}
                        >
                          {showGpa ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </span>
                    </div>
                    <div className="item-details">
                      <p><strong>{item.degree}</strong></p>
                      <p>Program Studi: {item.field}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {showCodeInput && (
                <div className="code-modal">
                    <div className="code-modal-content">
                    <h3>Masukkan Kode Akses</h3>
                    <div className="input-container">
                        <input
                        type="password"
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)}
                        placeholder="Masukkan kode"
                        autoFocus
                        className="centered-input"
                        />
                    </div>
                    {accessError && <p className="error-message">{accessError}</p>}
                    <div className="modal-buttons">
                        <button type="button" onClick={handleCodeSubmit} className="submit-btn">
                        Submit
                        </button>
                        <button 
                        type="button" 
                        onClick={() => {
                            setShowCodeInput(false);
                            setAccessError('');
                        }}
                        className="cancel-btn"
                        >
                        Batal
                        </button>
                    </div>
                    </div>
                </div>
            )}
            
            {educationData.length > 5 && (
              <button className="show-more" onClick={() => setShowAll(!showAll)}>
                {showAll ? (
                  <>
                    <FaChevronUp /> Show Less
                  </>
                ) : (
                  <>
                    <FaChevronDown /> Show More ({educationData.length - 5})
                  </>
                )}
              </button>
            )}
          </div>
        );
      
      case 'experience':
        return (
          <div className="items-container">
            {experienceData.slice(0, showAll ? experienceData.length : 5).map((item) => (
              <div key={item.id} className="item-card">
                <div className="item-header">
                  <div className="item-logo">
                    <img src={item.logo} alt={item.organization} />
                  </div>
                  <div className="item-info">
                    <h3>{item.organization}</h3>
                    <div className="item-meta">
                      <span>{item.startDate} - {item.endDate}</span>
                      <span className={`type ${item.type.toLowerCase()}`}>{item.type}</span>
                    </div>
                    <div className="item-details">
                      <p><strong>{item.position}</strong></p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {experienceData.length > 5 && (
              <button className="show-more" onClick={() => setShowAll(!showAll)}>
                {showAll ? (
                  <>
                    <FaChevronUp /> Show Less
                  </>
                ) : (
                  <>
                    <FaChevronDown /> Show More ({experienceData.length - 5})
                  </>
                )}
              </button>
            )}
          </div>
        );
      
      case 'achievements':
        return (
          <div className="items-container">
            {achievementData.slice(0, showAll ? achievementData.length : 5).map((item) => (
              <div key={item.id} className="item-card">
                <div className="achievement-badge">
                  <CiMedal />
                </div>
                <div className="item-info">
                  <h3>{item.title}</h3>
                  <div className="item-meta">
                    <span>{item.organizer}</span>
                    <span className="year">{item.year}</span>
                  </div>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
            {achievementData.length > 5 && (
              <button className="show-more" onClick={() => setShowAll(!showAll)}>
                {showAll ? (
                  <>
                    <FaChevronUp /> Show Less
                  </>
                ) : (
                  <>
                    <FaChevronDown /> Show More ({achievementData.length - 5})
                  </>
                )}
              </button>
            )}
          </div>
        );
      
      case 'projects':
        return (
          <div className="items-container">
            {projectData.slice(0, showAll ? projectData.length : 5).map((item) => (
              <div key={item.id} className="item-card project-card">
                <div className="project-icon">
                  <FaCode />
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <div className="item-meta">
                    <span className="date">{item.date}</span>
                    <div className="tech-tags">
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
            {projectData.length > 5 && (
              <button className="show-more" onClick={() => setShowAll(!showAll)}>
                {showAll ? (
                  <>
                    <FaChevronUp /> Show Less
                  </>
                ) : (
                  <>
                    <FaChevronDown /> Show More ({projectData.length - 5})
                  </>
                )}
              </button>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="more-container">
      <h1 className="page-title">Lainnya</h1>
      
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('education');
            setShowAll(false);
          }}
        >
          <FaUniversity /> Pendidikan
        </button>
        <button
          className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('experience');
            setShowAll(false);
          }}
        >
          <FaBriefcase /> Pengalaman Lain
        </button>
        <button
          className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('achievements');
            setShowAll(false);
          }}
        >
          <FaTrophy /> Prestasi
        </button>
        <button
          className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('projects');
            setShowAll(false);
          }}
        >
          <FaCode /> Project
        </button>
      </div>
      
      <div className="content-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default More;