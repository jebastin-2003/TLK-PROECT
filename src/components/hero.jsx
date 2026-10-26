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
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '120px 8% 100px 8%', // Balanced top and bottom padding for more gap
        background: '#0a0a0a', 
        overflow: 'hidden',
        color: '#ffffff',
        borderTop: '2px solid #dc2626',
        borderBottom: '2px solid #dc2626',
        boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)',
      }}
    >
      {/* Background Logo Image Tag */}
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

      {/* Main Content (Left Side) */}
      <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
        <span 
          className="section-tag" 
          style={{ 
            background: 'rgba(153, 27, 27, 0.25)', 
            color: '#f87171',
            padding: '6px 12px', 
            border: '1px solid rgba(153, 27, 27, 0.5)',
            borderRadius: '4px',
            fontSize: '0.85rem',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
            NEW ERA OF FITNESS
        </span>

        {/* Main Heading */}
        <h1 
          style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 900, 
            fontStyle: 'italic', 
            textTransform: 'uppercase', 
            lineHeight: 1.1, 
            marginTop: '20px',
            marginBottom: '20px'
          }}
        >
          {/* Row 1: TLK UNISEX */}
          <span style={{ color: '#dc2626' }}>TLK</span>{' '}
          <span style={{ color: '#ffffff' }}>UNISEX</span>
          <br />
          {/* Row 2: FITNESS ZONE */}
          <span style={{ color: '#ffffff' }}>FITNESS ZONE</span>
        </h1>

        <p style={{ color: '#d4d4d4', marginTop: '16px', lineHeight: 1.6, fontSize: '1rem' }}>
          Push past average. Become unstoppable. At{' '}
          <strong style={{ color: '#dc2626' }}>TLK</strong>{' '}
          <span style={{ color: '#ffffff', fontWeight: 'bold' }}>UNISEX FITNESS ZONE</span>, we combine elite athletic conditioning, high-intensity strength training, and strict discipline for total physical transformation.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginTop: '32px', flexWrap: 'wrap' }}>
          <a href="#contact" className="btn-red">Start Your Journey &rarr;</a>
          <a href="#programs" className="btn-outline">Explore Programs &rarr;</a>
        </div>
      </div>

      {/* Hero Visual Card with Direct Image Tag (Right Side) */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: '32px', width: '100%', maxWidth: '420px' }}>
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