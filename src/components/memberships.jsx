import React from 'react';

const plans = [
  { name: "Pulse 6-Month", price: "$149", desc: "Full facility access with standard conditioning tracks." },
  { name: "Iron 1-Yr", price: "$249", popular: true, desc: "Our most popular membership for serious athletes." },
  { name: "Founders Circle", price: "$399", desc: "Exclusive VIP access with private coaching sessions." },
];

export default function Membership() {
  return (
    <section 
      id="membership" 
      style={{ 
        padding: '120px 32px', // Top & Bottom padding-ai 80px-il irundhu 120px-aga adhigarithullom
        backgroundColor: '#0b0b0b',
        width: '100%',
        borderTop: '2px solid #dc2626',
        borderBottom: '2px solid #dc2626',
        boxShadow: '0 0 20px rgba(220, 38, 38, 0.3)'
      }}
    >
      <style>{`
        .highlight-red {
          color: #dc2626;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.6);
        }
      `}</style>

      {/* Header Section */}
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 80px' }}> {/* Bottom margin-ai 64px-il irundhu 80px-aga adhigarithullom */}
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', color: '#fff', marginTop: '16px', marginBottom: '20px' }}>
          <span className="highlight-red">M</span>EMBERSHIP
        </h2>
        <p style={{ color: '#a3a3a3', fontSize: '0.875rem', marginTop: '16px', lineHeight: '1.6' }}>
          Uncompromising standards and elite facilities for serious fitness practitioners.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid-3" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className="card" 
            style={{ 
              borderColor: plan.popular ? '#dc2626' : '#262626', 
              position: 'relative', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              backgroundColor: 'rgba(23, 23, 23, 0.6)',
              padding: '32px',
              borderRadius: '8px'
            }}
          >
            {plan.popular && (
              <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#dc2626', color: '#fff', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 12px', borderRadius: '4px' }}>
                Most Popular
              </span>
            )}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', color: '#fff' }}>
                {plan.name}
              </h3>
              <p style={{ color: '#a3a3a3', fontSize: '0.75rem', marginTop: '8px', lineHeight: 1.5 }}>
                {plan.desc}
              </p>
              <div style={{ margin: '32px 0' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: '#fff' }}>{plan.price}</span>
                <span style={{ color: '#737373', fontSize: '0.75rem', fontFamily: 'monospace', marginLeft: '8px' }}>/ month</span>
              </div>
            </div>
            <button className={plan.popular ? "btn-red" : "btn-outline"} style={{ width: '100%', padding: '12px', cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Secure Plan &rarr;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}