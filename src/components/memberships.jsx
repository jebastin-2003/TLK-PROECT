import React from 'react';

const studentPlans = [
  { name: "School Students", price: "₹600" },
  { name: "College Students", price: "₹800", popular: true },
];

const strengthTrainingPlans = [
  { period: "Monthly", price: "₹1,200" },
  { period: "3 Month", price: "₹2,800" },
  { period: "6 Month", price: "₹5,000", badge: "+1 Month Free", popular: true },
  { period: "1 Year", price: "₹6,999", badge: "+2 Months Free", popular: true },
];

const cardioStrengthPlans = [
  { period: "Monthly", price: "₹1,500" },
  { period: "3 Month", price: "₹3,800" },
  { period: "6 Month", price: "₹7,000", badge: "+1 Month Free", popular: true },
  { period: "1 Year", price: "₹9,000", badge: "+2 Months Free", popular: true },
];

export default function Membership() {
  // Helper to render text with specific key letters in Red
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
        boxSizing: 'border-box'
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

        /* Perfect Center Alignment for Cards & Tables */
        .card-center-content {
          text-align: center !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        
        /* Red Glowing Book Now Button Styling */
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

        @media (max-width: 600px) {
          #membership {
            padding: 60px 14px !important;
          }
          .table-container {
            grid-template-columns: 1fr;
          }
          .plan-row-item {
            flex-direction: column !important;
            gap: 8px !important;
            text-align: center !important;
          }
        }
      `}</style>

      {/* Main Membership Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 50px auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 2.8rem)', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '0' }}>
          {renderFormattedHeading("MEMBERSHIP PLANS")}
        </h2>
      </div>

      {/* Student Special Plans Row */}
      <div className="membership-grid">
        {studentPlans.map((plan, idx) => (
          <div 
            key={idx} 
            className="card-center-content"
            style={{ 
              border: `2px solid ${plan.popular ? '#dc2626' : 'rgba(255, 255, 255, 0.4)'}`,
              position: 'relative', 
              backgroundColor: 'rgba(23, 23, 23, 0.6)',
              padding: '32px 24px',
              borderRadius: '10px',
              boxSizing: 'border-box',
              boxShadow: plan.popular ? '0 0 15px rgba(220, 38, 38, 0.3)' : '0 0 15px rgba(255, 255, 255, 0.1)'
            }}
          >
            {plan.popular && (
              <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#dc2626', color: '#fff', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 12px', borderRadius: '4px', boxShadow: '0 0 10px rgba(220, 38, 38, 0.6)', whiteSpace: 'nowrap' }}>
                Most Popular
              </span>
            )}
            <div className="card-center-content" style={{ width: '100%' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', marginBottom: '12px' }}>
                <span style={{ marginRight: '6px' }}>🎓</span>
                {renderFormattedHeading(plan.name)}
              </h3>
              <div style={{ margin: '16px 0 12px 0', textAlign: 'center' }}>
                <span style={{ fontSize: '2.6rem', fontWeight: 900, color: '#fff' }}>{plan.price}</span>
                <span style={{ color: '#a3a3a3', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'monospace', marginLeft: '6px' }}>/ month</span>
              </div>
            </div>
            
            {/* Book Now Red Glow Button */}
            <a href="#contact" className="btn-book-now">
              Book Now &rarr;
            </a>
          </div>
        ))}
      </div>

      {/* Detailed Pricing Tables (Strength Training & Cardio + Strength) */}
      <div className="table-container">
        
        {/* Strength Training Table */}
        <div className="card-center-content" style={{ backgroundColor: 'rgba(23, 23, 23, 0.7)', border: '2px solid #262626', borderRadius: '12px', padding: '28px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', boxSizing: 'border-box' }}>
          <div style={{ width: '100%' }}>
            <div style={{ borderBottom: '2px solid #dc2626', paddingBottom: '16px', marginBottom: '22px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
                <span style={{ marginRight: '6px' }}>🏋️‍♂️</span>
                {renderFormattedHeading("STRENGTH TRAINING")}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {strengthTrainingPlans.map((item, i) => (
                <div 
                  key={i} 
                  className="plan-row-item" 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '14px 18px', 
                    background: item.popular ? 'rgba(220, 38, 38, 0.15)' : 'rgba(255, 255, 255, 0.05)', 
                    border: `2px solid ${item.popular ? '#dc2626' : 'rgba(255, 255, 255, 0.4)'}`, 
                    borderRadius: '8px', 
                    boxShadow: item.popular ? '0 0 12px rgba(220, 38, 38, 0.25)' : '0 0 10px rgba(255, 255, 255, 0.08)' 
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: '1rem' }}>{item.period}</span>
                    {item.badge && <span style={{ marginLeft: '10px', fontSize: '11px', background: '#dc2626', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontWeight: 800, display: 'inline-block' }}>{item.badge}</span>}
                  </div>
                  <span style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 900 }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Book Now Red Glow Button */}
          <a href="#contact" className="btn-book-now">
            Book Now &rarr;
          </a>
        </div>

        {/* Cardio + Strength Training Table */}
        <div className="card-center-content" style={{ backgroundColor: 'rgba(23, 23, 23, 0.7)', border: '2px solid #262626', borderRadius: '12px', padding: '28px 20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', boxSizing: 'border-box' }}>
          <div style={{ width: '100%' }}>
            <div style={{ borderBottom: '2px solid #dc2626', paddingBottom: '16px', marginBottom: '22px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', margin: 0 }}>
                <span style={{ marginRight: '6px' }}>❤️</span>
                {renderFormattedHeading("CARDIO + STRENGTH TRAINING")}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cardioStrengthPlans.map((item, i) => (
                <div 
                  key={i} 
                  className="plan-row-item" 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '14px 18px', 
                    background: item.popular ? 'rgba(220, 38, 38, 0.15)' : 'rgba(255, 255, 255, 0.05)', 
                    border: `2px solid ${item.popular ? '#dc2626' : 'rgba(255, 255, 255, 0.4)'}`, 
                    borderRadius: '8px', 
                    boxShadow: item.popular ? '0 0 12px rgba(220, 38, 38, 0.25)' : '0 0 10px rgba(255, 255, 255, 0.08)' 
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: '1rem' }}>{item.period}</span>
                    {item.badge && <span style={{ marginLeft: '10px', fontSize: '11px', background: '#dc2626', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontWeight: 800, display: 'inline-block' }}>{item.badge}</span>}
                  </div>
                  <span style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 900 }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Book Now Red Glow Button */}
          <a href="#contact" className="btn-book-now">
            Book Now &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}