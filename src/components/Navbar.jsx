import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('sidebar-open', !isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setIsOpen(false);
        document.body.classList.remove('sidebar-open');
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">HotPort</Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="navbar-menu">
          <ul className="navbar-list">
            <li><Link to="/sertifikasi" className="nav-link">Sertifikasi</Link></li>
            <li><Link to="/experience" className="nav-link">Experience</Link></li>
            <li><Link to="/skill" className="nav-link">Skill</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/more" className="nav-link">More</Link></li>
          </ul>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div 
          className={`hamburger ${isOpen ? "open" : ""}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <div className={`navbar-overlay ${isOpen ? "open" : ""}`} onClick={toggleMenu} />
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          {/* <button className="close-btn" onClick={toggleMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button> */}
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-list">
            <li><Link to="/sertifikasi" onClick={toggleMenu} className="sidebar-link">Sertifikasi</Link></li>
            <li><Link to="/experience" onClick={toggleMenu} className="sidebar-link">Experience</Link></li>
            <li><Link to="/skill" onClick={toggleMenu} className="sidebar-link">Skill</Link></li>
            <li><Link to="/about" onClick={toggleMenu} className="sidebar-link">About</Link></li>
            <li><Link to="/more" onClick={toggleMenu} className="sidebar-link">More</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;