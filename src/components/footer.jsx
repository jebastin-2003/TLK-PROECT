import React from 'react';

export default function Footer() {
  const WHATSAPP_NUMBER = "919342146824";
  const PHONE_NUMBER = "+919342146824";
  const EMAIL_ADDRESS = "albertarul1985@gmail.com";
  const INSTAGRAM_URL = "https://www.instagram.com/tlk_unisex_fitness_zone?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==";

  // Helper to render text with specific initial key letters in Red
  const renderFormattedHeading = () => {
    return (
      <>
        <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>T</span>
        <span style={{ color: '#ffffff' }}>LK </span>
        <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>U</span>
        <span style={{ color: '#ffffff' }}>NISEX </span>
        <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>F</span>
        <span style={{ color: '#ffffff' }}>ITNESS </span>
        <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>Z</span>
        <span style={{ color: '#ffffff' }}>ONE</span>
      </>
    );
  };

  return (
    <footer style={{
      backgroundColor: '#070707',
      color: '#a3a3a3',
      padding: '70px 20px 30px 20px',
      borderTop: '2px solid #dc2626',
      boxShadow: '0 -5px 25px rgba(220, 38, 38, 0.2)',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      <style>{`
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 40px;
          padding-bottom: 50px;
          border-bottom: 1px solid #1f1f1f;
        }
        .footer-col h3 {
          font-size: 1.2rem;
          font-weight: 900;
          text-transform: uppercase;
          font-style: italic;
          margin-bottom: 20px;
          letter-spacing: 0.05em;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          color: #a3a3a3;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .footer-links a:hover {
          color: #dc2626;
          padding-left: 6px;
        }
        .footer-social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #171717;
          border: 1px solid #262626;
          color: #ffffff;
          margin-right: 12px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .footer-social-icon:hover {
          background-color: #dc2626;
          border-color: #dc2626;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.8);
          transform: translateY(-3px);
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 30px auto 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 0.75rem;
          color: #525252;
          font-family: monospace;
        }
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Col 1: Brand Info */}
        <div className="footer-col">
          <h3>
            {renderFormattedHeading()}
          </h3>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '20px' }}>
            Push your limits, build ultimate strength, and transform your body with professional guidance and top-notch equipment.
          </p>
          <div style={{ display: 'flex' }}>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="WhatsApp">
              💬
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-social-icon" title="Instagram">
              📸
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="footer-social-icon" title="Call Us">
              📞
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h3 style={{ color: '#ffffff' }}>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#events">Events & Highlights</a></li>
            <li><a href="#membership">Membership Plans</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Col 3: Contact Details */}
        <div className="footer-col">
          <h3 style={{ color: '#ffffff' }}>Get In Touch</h3>
          <p style={{ fontSize: '0.85rem', marginBottom: '10px' }}>
            📞 <a href={`tel:${PHONE_NUMBER}`} style={{ color: '#e5e5e5', textDecoration: 'none' }}>{PHONE_NUMBER}</a>
          </p>
          <p style={{ fontSize: '0.85rem', marginBottom: '10px', wordBreak: 'break-all' }}>
            ✉️ <a href={`mailto:${EMAIL_ADDRESS}`} style={{ color: '#e5e5e5', textDecoration: 'none' }}>{EMAIL_ADDRESS}</a>
          </p>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: '#a3a3a3' }}>
            📍 Open All Days for Fitness Enthusiasts
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div>© 2026 TLK UNISEX FITNESS ZONE. ALL RIGHTS RESERVED.</div>
        <div>POWERED BY REACT & VITE</div>
      </div>
    </footer>
  );
}