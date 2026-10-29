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

    if (text === "MEMBERSHIP PLANS") {
      return (
        <>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>M</span>
          <span style={{ color: '#ffffff' }}>EMBERSHIP </span>
          <span style={{ color: '#dc2626', textShadow: '0 0 10px rgba(220, 38, 38, 0.6)' }}>P</span>
          <span style={{ color: '#ffffff' }}>LANS</span>
        </>
      );
    }

    return (
      <span 
        style={{ 
          color: '#ffffff', 
          letterSpacing: '0.05em'
        }}
      >
        {text}
      </span>
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

        .plan-list-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .plan-list-row:last-child {
          border-bottom: none;
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
          color: #fca5a5;
          background-color: rgba(153, 27, 27, 0.35);
          border: 2px solid rgba(220, 38, 38, 0.5);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 0 12px rgba(220, 38, 38, 0.2);
          box-sizing: border-box;
          margin-top: 20px;
        }

        .btn-book-now:hover, .btn-book-now:focus, .btn-book-now:active {
          background-color: rgba(185, 28, 28, 0.55);
          border-color: #dc2626;
          color: #ffffff;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.6);
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
              border: '1.5px solid rgba(209, 213, 219, 0.4)',
              position: 'relative', 
              backgroundColor: 'rgba(23, 23, 23, 0.85)',
              padding: '28px 20px',
              borderRadius: '12px',
              boxSizing: 'border-box',
              minHeight: '230px',
              boxShadow: '0 0 15px rgba(209, 213, 219, 0.12), inset 0 0 8px rgba(255, 255, 255, 0.03)'
            }}
          >
            {/* Silver-Grey Tone Underline for School & College Students */}
            <div style={{ width: '100%', borderBottom: '2px solid rgba(209, 213, 219, 0.4)', paddingBottom: '16px', marginBottom: '22px', textAlign: 'center', boxShadow: '0 4px 10px rgba(209, 213, 219, 0.15)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
                <span style={{ marginRight: '6px' }}>🎓</span>
                {renderFormattedHeading(plan.name)}
              </h3>
            </div>

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
        <div 
          className="card-center-content membership-scroll-item" 
          style={{ 
            backgroundColor: 'rgba(23, 23, 23, 0.85)', 
            border: '1.5px solid rgba(209, 213, 219, 0.4)', 
            borderRadius: '12px', 
            padding: '28px 20px', 
            boxShadow: '0 0 15px rgba(209, 213, 219, 0.12), inset 0 0 8px rgba(255, 255, 255, 0.03)', 
            boxSizing: 'border-box' 
          }}
        >
          <div style={{ width: '100%' }}>
            {/* Silver-Grey Tone Underline for Strength Training */}
            <div style={{ borderBottom: '2px solid rgba(209, 213, 219, 0.4)', paddingBottom: '16px', marginBottom: '22px', textAlign: 'center', boxShadow: '0 4px 10px rgba(209, 213, 219, 0.15)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
                <span style={{ marginRight: '6px' }}>🏋️‍♂️</span>
                {renderFormattedHeading("STRENGTH TRAINING")}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {strengthTrainingPlans.map((item, i) => (
                <div key={i} className="plan-list-row">
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem' }}>{item.period}</span>
                    {item.badge && <span style={{ marginLeft: '8px', fontSize: '10px', background: '#dc2626', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 800, display: 'inline-block', boxShadow: '0 0 8px rgba(220, 38, 38, 0.4)' }}>{item.badge}</span>}
                  </div>
                  <span style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 900 }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <a href="#contact" className="btn-book-now">
            Book Now &rarr;
          </a>
        </div>

        {/* Cardio + Strength Training Table */}
        <div 
          className="card-center-content membership-scroll-item" 
          style={{ 
            backgroundColor: 'rgba(23, 23, 23, 0.85)', 
            border: '1.5px solid rgba(209, 213, 219, 0.4)', 
            borderRadius: '12px', 
            padding: '28px 20px', 
            boxShadow: '0 0 15px rgba(209, 213, 219, 0.12), inset 0 0 8px rgba(255, 255, 255, 0.03)', 
            boxSizing: 'border-box' 
          }}
        >
          <div style={{ width: '100%' }}>
            {/* Silver-Grey Tone Underline for Cardio + Strength */}
            <div style={{ borderBottom: '2px solid rgba(209, 213, 219, 0.4)', paddingBottom: '16px', marginBottom: '22px', textAlign: 'center', boxShadow: '0 4px 10px rgba(209, 213, 219, 0.15)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
                <span style={{ marginRight: '6px' }}>❤️</span>
                {renderFormattedHeading("CARDIO + STRENGTH TRAINING")}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {cardioStrengthPlans.map((item, i) => (
                <div key={i} className="plan-list-row">
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: '0.95rem' }}>{item.period}</span>
                    {item.badge && <span style={{ marginLeft: '8px', fontSize: '10px', background: '#dc2626', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 800, display: 'inline-block', boxShadow: '0 0 8px rgba(220, 38, 38, 0.4)' }}>{item.badge}</span>}
                  </div>
                  <span style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 900 }}>{item.price}</span>
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