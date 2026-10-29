import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 24px;
          background-color: #0b0b0b;
          border-bottom: 1px solid #262626;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
        }

        /* Brand Container with Logo and Glow Box */
        .nav-brand-container {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 4px;
          text-decoration: none;
        }

        .nav-logo-box {
          width: 42px;
          height: 42px;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid #dc2626;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #111;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .nav-logo-box:hover {
          transform: scale(1.05);
          box-shadow: 0 0 22px rgba(220, 38, 38, 0.9);
        }

        .nav-logo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .nav-brand-text {
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          font-style: italic;
          display: flex;
          align-items: center;
        }

        .brand-t {
          color: #dc2626;
          text-shadow: 0 0 12px rgba(220, 38, 38, 0.8);
        }

        .brand-lk {
          color: #ffffff;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.5), 0 0 20px rgba(220, 38, 38, 0.4);
        }

        /* Desktop View (Laptop & PC) */
        .nav-links-desktop {
          display: flex;
          gap: 28px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          align-items: center;
        }
        .nav-links-desktop a {
          color: #d4d4d4;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-links-desktop a:hover {
          color: #dc2626;
        }

        /* Android / Mobile 3-Lines Hamburger Icon */
        .hamburger-btn {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 101;
        }
        .hamburger-line {
          width: 26px;
          height: 3px;
          background-color: #ffffff;
          margin: 3px 0;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        /* Mobile Dropdown Menu */
        .mobile-menu {
          display: none;
        }

        /* Responsive Breakpoint for Android & Mobile */
        @media (max-width: 900px) {
          .navbar {
            padding: 10px 16px;
            min-height: 85px;
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-between;
            align-items: end;
          }

          .nav-brand-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
          }

          .nav-logo-box {
            width: 32px;
            height: 32px;
          }

          .nav-brand-text {
            font-size: 1rem;
            line-height: 1;
          }

          .nav-links-desktop {
            display: none;
          }

          .hamburger-btn {
            display: flex;
            justify-self: end;
            align-self: end;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #0b0b0b;
            border-bottom: 2px solid #dc2626;
            padding: 20px 24px;
            gap: 16px;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.95);
          }
          .mobile-menu a {
            color: #ffffff;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            padding: 10px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            transition: color 0.2s ease;
            text-align: left;
          }
          .mobile-menu a:hover {
            color: #dc2626;
          }
        }
      `}</style>

      {/* Brand Section with Left Logo and Glowing Text Styling */}
      <a href="#" className="nav-brand-container">
        <div className="nav-logo-box">
          <img 
            src="/images/main%20logo.jpg" 
            alt="TLK Logo" 
            className="nav-logo-img" 
          />
        </div>
        <span className="nav-brand-text">
          <span className="brand-t">T</span>
          <span className="brand-lk">LK</span>
        </span>
      </a>

      {/* PC & Laptop Desktop Links */}
      <div className="nav-links-desktop">
        <a href="#">HOME</a>
        <a href="#events-highlights">GYM VIEW</a>
        <a href="#schedule">REVIEWS</a>
        <a href="#membership">MEMBERSHIP</a>
        <a href="#contact">CONTACT</a>
        <a href="#contact" className="btn-red" style={{ padding: '8px 20px', fontSize: '0.8rem', marginLeft: '12px' }}>
          Join Now
        </a>
      </div>

      {/* Android Extreme Right-Side Corner 3-Lines Hamburger Button */}
      <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
        <div style={{ transform: isOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} className="hamburger-line"></div>
        <div style={{ opacity: isOpen ? 0 : 1 }} className="hamburger-line"></div>
        <div style={{ transform: isOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} className="hamburger-line"></div>
      </button>

      {/* Android Dropdown Menu - Updated Schedule to Reviews */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#" onClick={closeMenu}>HOME</a>
          <a href="#events-highlights" onClick={closeMenu}>GYM VIEW</a>
          <a href="#schedule" onClick={closeMenu}>REVIEWS</a>
          <a href="#membership" onClick={closeMenu}>MEMBERSHIP</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
          <a href="#contact" className="btn-red" onClick={closeMenu} style={{ padding: '12px', fontSize: '0.85rem', width: '100%', textAlign: 'center', marginTop: '8px' }}>
            JOIN NOW
          </a>
        </div>
      )}
    </nav>
  );
}