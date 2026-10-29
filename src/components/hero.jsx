import React from 'react';

export default function Hero() {
  return (
    <section 
      className="hero-section" 
      style={{
        position: 'relative',
        minHeight: '85vh',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '120px 8% 100px 8%',
        background: '#0a0a0a', 
        overflow: 'hidden',
        color: '#ffffff',
        borderTop: '2px solid #dc2626',
        borderBottom: '2px solid #dc2626',
        boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)',
      }}
    >
      <style>{`
        /* Small Red Glowing Call Button Style */
        .btn-call-glow-small {
          background-color: rgba(220, 38, 38, 0.15);
          color: #ffffff;
          border: 1.5px solid #dc2626;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.8rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.4), inset 0 0 6px rgba(220, 38, 38, 0.2);
          transition: all 0.3s ease-in-out;
          margin: 0 auto;
        }
        .btn-call-glow-small:hover {
          background-color: rgba(220, 38, 38, 0.3);
          border-color: #ef4444;
          box-shadow: 0 0 18px rgba(220, 38, 38, 0.7);
          transform: translateY(-2px);
        }

        /* Container for Main Button + Centered Small Call Button */
        .hero-action-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          margin-top: 32px;
        }

        .action-button-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 900px) {
          .hero-section {
            padding: 80px 20px 60px 20px !important;
            justifyContent: center !important;
            textAlign: center !important;
          }
          .hero-content {
            margin: 0 auto 32px auto !important;
          }
          .hero-action-container {
            align-items: center !important;
          }
        }
      `}</style>

      <img 
        src="/images/main%20logo.jpg" 
        alt="Gym Background Logo" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.2, 
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="hero-content" style={{ maxWidth: '600px', position: 'relative', zIndex: 2, marginBottom: '32px' }}>
        <h1 
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 900, 
            fontStyle: 'italic', 
            textTransform: 'uppercase', 
            lineHeight: 1.1, 
            marginBottom: '20px'
          }}
        >
          <span style={{ color: '#dc2626' }}>TLK</span>{' '}
          <span style={{ color: '#ffffff' }}>UNISEX</span>
          <br />
          <span style={{ color: '#ffffff' }}>FITNESS ZONE</span>
        </h1>

        <p style={{ color: '#d4d4d4', marginTop: '16px', lineHeight: 1.6, fontSize: '1rem' }}>
          Push past average. Become unstoppable. At{' '}
          <strong style={{ color: '#dc2626' }}>TLK</strong>{' '}
          <span style={{ color: '#ffffff', fontWeight: 'bold' }}>UNISEX FITNESS ZONE</span>, we combine elite athletic conditioning, high-intensity strength training, and strict discipline for total physical transformation.
        </p>

        {/* Action Container: Start Your Journey and Centered Small Call Us Button underneath */}
        <div className="hero-action-container">
          <div className="action-button-wrapper">
            <a href="#contact" className="btn-red">Start Your Journey &rarr;</a>
            
            {/* Small size centered Call Us button under Start Your Journey */}
            <a href="tel:+919342146824" className="btn-call-glow-small">
              <span>📞</span> Call Us: +91 9342146824
            </a>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '420px', margin: '0 auto' }}>
        <div 
          style={{ 
            height: '420px', 
            background: 'rgba(23, 23, 23, 0.6)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src="/images/hero1.jpg" 
            alt="Hero Athlete Visual" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>
    </section>
  );
}