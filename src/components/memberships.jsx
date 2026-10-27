import React, { useEffect, useRef } from 'react';

const studentPlans = [
  { name: "School Students", price: "₹600" },
  { name: "College Students", price: "₹800" },
];

const strengthTrainingPlans = [
  { period: "Monthly", price: "₹1,200" },
  { period: "3 Month", price: "₹2,800" },
  { period: "6 Month", price: "₹5,000", badge: "+1 Month Free" },
  { period: "1 Year", price: "₹6,999", badge: "+2 Months Free" },
];

const cardioStrengthPlans = [
  { period: "Monthly", price: "₹1,500" },
  { period: "3 Month", price: "₹3,800" },
  { period: "6 Month", price: "₹7,000", badge: "+1 Month Free" },
  { period: "1 Year", price: "₹9,000", badge: "+2 Months Free" },
];

export default function Membership() {
  const containerRef = useRef(null);

  useEffect(() => {
    let intervalId = null;
    const container = containerRef.current;

    const startAutoScroll = () => {
      if (window.innerWidth <= 768 && container) {
        intervalId = setInterval(() => {
          const firstCard = container.querySelector('.membership-scroll-item');
          if (!firstCard) return;
          const cardWidth = firstCard.offsetWidth + 16;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;

          if (container.scrollLeft >= maxScrollLeft - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }, 3500);
      }
    };

    startAutoScroll();

    const handleTouchStart = () => {
      if (intervalId) clearInterval(intervalId);
    };

    if (container) {
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('mousedown', handleTouchStart);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (container) {
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('mousedown', handleTouchStart);
      }
    };
  }, []);

  const renderFormattedHeading = (text) => {
    if (!text) return null;

    if (text === "School Students") {
      return (
        <>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>S</span>
          <span style={{ color: '#ffffff' }}>chool </span>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>S</span>
          <span style={{ color: '#ffffff' }}>tudents</span>
        </>
      );
    }

    if (text === "College Students") {
      return (
        <>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>C</span>
          <span style={{ color: '#ffffff' }}>ollege </span>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>S</span>
          <span style={{ color: '#ffffff' }}>tudents</span>
        </>
      );
    }

    if (text === "STRENGTH TRAINING") {
      return (
        <>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>S</span>
          <span style={{ color: '#ffffff' }}>TRENGTH </span>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>T</span>
          <span style={{ color: '#ffffff' }}>RAINING</span>
        </>
      );
    }

    if (text === "CARDIO + STRENGTH TRAINING") {
      return (
        <>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>C</span>
          <span style={{ color: '#ffffff' }}>ARDIO + </span>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>S</span>
          <span style={{ color: '#ffffff' }}>TRENGTH </span>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>T</span>
          <span style={{ color: '#ffffff' }}>RAINING</span>
        </>
      );
    }

    return (
      <>
        <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>
          {text.charAt(0)}
        </span>
        <span style={{ color: '#ffffff' }}>
          {text.slice(1)}
        </span>
      </>
    );
  };

  return (
    <section 
      id="membership" 
      style={{ 
        padding: '90px 20px',
        backgroundColor: '#0b0b0b',
        width: '100%',
        borderTop: '2px solid #dc2626',
        borderBottom: '2px solid #dc2626',
        boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      <style>{`
        .membership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto 50px auto;
        }
        
        .table-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card-center-content {
          text-align: center !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .student-card-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          width: 100%;
          padding: 20px 0;
        }

        .student-price-display {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        
        .btn-book-now {
          display: block;
          width: 100%;
          padding: 14px 20px;
          text-align: center;
          font-weight: 800;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          text-decoration: none;
          color: #ffffff;
          background-color: #dc2626;
          border: 2px solid #dc2626;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 0 18px rgba(220, 38, 38, 0.7), 0 0 8px rgba(220, 38, 38, 0.4);
          box-sizing: border-box;
          margin-top: 20px;
        }

        .btn-book-now:hover, .btn-book-now:focus, .btn-book-now:active {
          background-color: #ef4444;
          border-color: #ef4444;
          color: #ffffff;
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.9), 0 0 15px rgba(220, 38, 38, 0.8);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          #membership {
            padding: 70px 0 !important;
          }
          .membership-grid, .table-container {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            scroll-behavior: smooth !important;
            gap: 16px !important;
            padding: 10px 24px 30px 24px !important;
            max-width: 100% !important;
            scrollbar-width: none;
          }
          .membership-grid::-webkit-scrollbar, .table-container::-webkit-scrollbar {
            display: none;
          }
          .membership-scroll-item {
            min-width: 85vw !important;
            max-width: 85vw !important;
            scroll-snap-align: center !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>

      {/* Main Membership Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px auto', padding: '0 20px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '0' }}>
          {renderFormattedHeading("MEMBERSHIP PLANS")}
        </h2>
      </div>

      {/* Student Special Plans Row */}
      <div className="membership-grid" ref={containerRef}>
        {studentPlans.map((plan, idx) => (
          <div 
            key={idx} 
            className="card-center-content membership-scroll-item"
            style={{ 
              border: '2px solid rgba(255, 255, 255, 0.85)',
              position: 'relative', 
              backgroundColor: 'rgba(23, 23, 23, 0.85)',
              padding: '36px 24px',
              borderRadius: '12px',
              boxSizing: 'border-box',
              minHeight: '230px',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.08)'
            }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: '0 0 10px 0', textAlign: 'center', width: '100%' }}>
              <span style={{ marginRight: '6px' }}>🎓</span>
              {renderFormattedHeading(plan.name)}
            </h3>

            {/* Exact Mid Center Stacked Price & Month */}
            <div className="student-card-body">
              <div className="student-price-display">
                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{plan.price}</span>
                <span style={{ color: '#a3a3a3', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'monospace', marginTop: '6px' }}>/ month</span>
              </div>
            </div>
            
            <a href="#contact" className="btn-book-now">
              Book Now &rarr;
            </a>
          </div>
        ))}

        {/* Strength Training Table */}
        <div className="card-center-content membership-scroll-item" style={{ backgroundColor: 'rgba(23, 23, 23, 0.85)', border: '2px solid rgba(255, 255, 255, 0.85)', borderRadius: '12px', padding: '28px 20px', boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.08)', boxSizing: 'border-box' }}>
          <div style={{ width: '100%' }}>
            <div style={{ borderBottom: '2px solid #dc2626', paddingBottom: '16px', marginBottom: '22px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
                <span style={{ marginRight: '6px' }}>🏋️‍♂️</span>
                {renderFormattedHeading("STRENGTH TRAINING")}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {strengthTrainingPlans.map((item, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '12px 16px', 
                    background: 'rgba(15, 15, 15, 0.6)', 
                    border: '2px solid #dc2626', 
                    borderRadius: '8px', 
                    boxShadow: '0 0 10px rgba(220, 38, 38, 0.25)' 
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.9rem' }}>{item.period}</span>
                    {item.badge && <span style={{ marginLeft: '8px', fontSize: '10px', background: '#dc2626', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 800, display: 'inline-block' }}>{item.badge}</span>}
                  </div>
                  <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 900 }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <a href="#contact" className="btn-book-now">
            Book Now &rarr;
          </a>
        </div>

        {/* Cardio + Strength Training Table */}
        <div className="card-center-content membership-scroll-item" style={{ backgroundColor: 'rgba(23, 23, 23, 0.85)', border: '2px solid rgba(255, 255, 255, 0.85)', borderRadius: '12px', padding: '28px 20px', boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.08)', boxSizing: 'border-box' }}>
          <div style={{ width: '100%' }}>
            <div style={{ borderBottom: '2px solid #dc2626', paddingBottom: '16px', marginBottom: '22px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
                <span style={{ marginRight: '6px' }}>❤️</span>
                {renderFormattedHeading("CARDIO + STRENGTH TRAINING")}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cardioStrengthPlans.map((item, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '12px 16px', 
                    background: 'rgba(15, 15, 15, 0.6)', 
                    border: '2px solid #dc2626', 
                    borderRadius: '8px', 
                    boxShadow: '0 0 10px rgba(220, 38, 38, 0.25)' 
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.9rem' }}>{item.period}</span>
                    {item.badge && <span style={{ marginLeft: '8px', fontSize: '10px', background: '#dc2626', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 800, display: 'inline-block' }}>{item.badge}</span>}
                  </div>
                  <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 900 }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <a href="#contact" className="btn-book-now">
            Book Now &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}