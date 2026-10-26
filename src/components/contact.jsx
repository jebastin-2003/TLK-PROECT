import React from 'react';

export default function Contact() {
  const WHATSAPP_NUMBER = "919342146824"; 
  const PHONE_NUMBER = "+919342146824";
  const EMAIL_ADDRESS = "albertarul1985@gmail.com";
  
  const whatsappMessage = encodeURIComponent("Hello! I want to join TLK Unisex Fitness Zone. Please share admission details.");
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
  
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=TLK+Unisex+Fitness+Zone";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8251234567!2d80.20!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzE4LjAiTiA4MMKAMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin";

  return (
    <section 
      id="contact" 
      style={{ 
        padding: '80px 20px',
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
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }
        .card-custom {
          background-color: rgba(23, 23, 23, 0.7);
          border: 1px solid #262626;
          padding: 32px 24px;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .card-custom:hover {
          border-color: #dc2626;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
          transform: translateY(-4px);
        }
        .btn-whatsapp {
          background-color: #25d366;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 12px 20px;
          text-decoration: none;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
          transition: all 0.2s ease;
          display: inline-block;
        }
        .btn-whatsapp:hover {
          background-color: #20ba5a;
          box-shadow: 0 0 16px rgba(37, 211, 102, 0.6);
        }
        .btn-action {
          background-color: #dc2626;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 10px 18px;
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.2s ease;
          display: inline-block;
          margin-top: 8px;
        }
        .btn-action:hover {
          background-color: #b91c1c;
          box-shadow: 0 0 12px rgba(220, 38, 38, 0.6);
        }
        .map-container {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 16px;
          border: 1px solid #333;
        }
        .map-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.1);
          transition: background 0.3s ease;
          cursor: pointer;
        }
        .map-container:hover .map-overlay {
          background: rgba(0,0,0,0);
        }
      `}</style>

      {/* Header Section */}
      <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
        <span style={{ color: '#dc2626', fontFamily: 'monospace', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          visit the
        </span>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', color: '#fff', marginTop: '8px' }}>
          <span className="highlight-red">C</span>ONNECT & TRAIN
        </h2>
        <p style={{ color: '#a3a3a3', fontSize: '0.875rem', marginTop: '12px', lineHeight: 1.6 }}>
          Ready to push your limits? Connect with us directly via WhatsApp, Email, Call, or visit our gym facility.
        </p>
      </div>

      <div className="contact-grid">
        {/* Card 1: WhatsApp Chat */}
        <div className="card-custom">
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💬</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
              WhatsApp Us
            </h3>
            <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '20px', lineHeight: 1.5 }}>
              Instant answers about membership, personal training & slot timings.
            </p>
          </div>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-whatsapp"
          >
            Chat on WhatsApp &rarr;
          </a>
        </div>

        {/* Card 2: Direct Call & Gmail */}
        <div className="card-custom">
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📞</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
              Call & Email
            </h3>
            <p style={{ color: '#e5e5e5', fontSize: '0.9rem', fontWeight: 600, margin: '6px 0' }}>
              {PHONE_NUMBER}
            </p>
            <p style={{ color: '#a3a3a3', fontSize: '0.85rem', wordBreak: 'break-all', marginBottom: '20px' }}>
              ✉️ {EMAIL_ADDRESS}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:${PHONE_NUMBER}`} className="btn-action">
              Call Now
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`} className="btn-action" style={{ backgroundColor: '#333' }}>
              Send Email
            </a>
          </div>
        </div>

        {/* Card 3: Location & Interactive Mini Map */}
        <div className="card-custom">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', color: '#fff', marginBottom: '12px' }}>
              📍 Our Location
            </h3>
            
            {/* Small Map View Container */}
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="map-container">
                <iframe
                  title="Gym Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="map-overlay"></div>
              </div>
            </a>

            <p style={{ color: '#a3a3a3', fontSize: '0.85rem', marginBottom: '16px' }}>
              TLK Unisex Fitness Zone
            </p>
          </div>

          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-action"
          >
            Open in Google Maps 🗺️
          </a>
        </div>
      </div>
    </section>
  );
}