import React, { useState, useEffect } from 'react';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Website open aagi 4 seconds (4000ms) aparam popup display aagum
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = (e) => {
    e.preventDefault();
    const WHATSAPP_NUMBER = "919342146824";
    const message = encodeURIComponent(`Hello! My Name is ${name || 'Fitness Enthusiast'} and my Phone Number is ${phone || 'Not Provided'}. I want to join TLK Unisex Fitness Zone. Please share membership details.`);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    setIsOpen(false);
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 100000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <style>{`
        .popup-card {
          background: linear-gradient(145deg, #111111 0%, #050505 100%);
          border: 2px solid #dc2626;
          box-shadow: 0 0 35px rgba(220, 38, 38, 0.5), inset 0 0 15px rgba(220, 38, 38, 0.15);
          border-radius: 20px;
          max-width: 440px;
          width: 100%;
          padding: 36px 28px 32px 28px;
          text-align: center;
          position: relative;
          animation: popScale 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          font-family: 'Inter', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @keyframes popScale {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .popup-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: #171717;
          border: 1px solid #333333;
          color: #ffffff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        }
        .popup-close-btn:hover {
          background-color: #dc2626;
          border-color: #dc2626;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.9);
          transform: rotate(90deg);
        }
        .popup-title {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          margin-bottom: 10px;
          letter-spacing: 0.04em;
          text-align: center;
        }
        .popup-badge {
          display: inline-block;
          background-color: rgba(220, 38, 38, 0.15);
          color: #dc2626;
          border: 1px solid #dc2626;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 14px;
          text-align: center;
        }
        .popup-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .popup-input {
          width: 100%;
          background-color: #171717;
          border: 1px solid #262626;
          color: #ffffff;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          margin-bottom: 12px;
          box-sizing: border-box;
          outline: none;
          text-align: center;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .popup-input::placeholder {
          text-align: center;
          color: #737373;
        }
        .popup-input:focus {
          border-color: #dc2626;
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.4);
        }
        .popup-book-btn {
          width: 100%;
          background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
          color: #ffffff;
          font-weight: 900;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 6px;
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.6);
          transition: all 0.25s ease;
          border: 1px solid #ef4444;
          text-align: center;
        }
        .popup-book-btn:hover {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.9);
        }
      `}</style>

      <div className="popup-card">
        {/* Top Right Close / Cancel Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="popup-close-btn"
          title="Close Popup"
        >
          ✕
        </button>

        <div className="popup-badge">Quick Registration</div>

        <h3 className="popup-title">
          JOIN <span style={{ color: '#dc2626', textShadow: '0 0 12px rgba(220, 38, 38, 0.7)' }}>TLK</span> TODAY!
        </h3>

        <p style={{ color: '#a3a3a3', fontSize: '0.83rem', lineHeight: 1.5, marginBottom: '18px', textAlign: 'center' }}>
          Enter your details below to connect instantly via WhatsApp & lock your slot.
        </p>

        <form onSubmit={handleBookNow} className="popup-form">
          <input 
            type="text" 
            placeholder="Enter Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="popup-input"
            required
          />
          <input 
            type="tel" 
            placeholder="Enter Mobile Number" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="popup-input"
            required
          />
          <button type="submit" className="popup-book-btn">
            <span>Book Now via WhatsApp</span>
            <span style={{ fontSize: '1.1rem' }}>&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
}