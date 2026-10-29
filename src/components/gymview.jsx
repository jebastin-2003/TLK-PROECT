import React from 'react';

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/tlk_unisex_fitness_zone?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==";

export default function EventsAndHighlights() {
  return (
    <section id="events-highlights" className="events-section">
      <style>{`
        .events-section {
          padding: 50px 24px;
          background-color: #0b0b0b;
          color: #e5e7eb;
          width: 100%;
          border-top: 2px solid #dc2626;
          border-bottom: 2px solid #dc2626;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
          box-sizing: border-box;
          overflow: hidden;
        }
        .events-header {
          margin-bottom: 30px;
          text-align: center;
        }
        .events-heading {
          font-size: 2rem;
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          color: #ffffff;
        }
        .highlight-red {
          color: #dc2626;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.6);
        }

        /* 3 Images Collage Layout */
        .collage-container-3 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          max-width: 800px;
          margin: 0 auto 20px auto;
        }

        .collage-item {
          background-color: #050505;
          border: 2px solid #262626;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease, box-shadow 0.4s ease;
        }

        /* Hover Effect: Zoom in & Red Border Glow */
        .collage-item:hover {
          transform: translateY(-4px) scale(1.03);
          border-color: #dc2626;
          box-shadow: 0 0 25px rgba(220, 38, 38, 0.8), 0 0 10px rgba(255, 255, 255, 0.2);
        }

        /* Image Smooth Zoom Inside Container */
        .collage-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background-color: #050505;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .collage-item:hover img {
          transform: scale(1.06);
        }

        /* Left Big Featured Photo (Picture 1) */
        .collage-item.big-featured {
          min-height: 420px;
        }

        /* Right Side Stack (Picture 2 & 3) */
        .right-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .right-stack .collage-item {
          height: 200px;
        }

        @media (max-width: 768px) {
          .collage-container-3 {
            grid-template-columns: 1fr;
          }
          .collage-item.big-featured {
            min-height: 320px;
          }
          .right-stack {
            display: contents;
          }
          .right-stack .collage-item {
            min-height: 280px;
          }
        }

        .instagram-btn-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }
        .btn-instagram {
          background-color: #dc2626;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 10px 24px;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 5px 15px rgba(220, 38, 38, 0.5);
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          border: none;
          cursor: pointer;
          border-radius: 4px;
        }
        .btn-instagram:hover {
          background-color: #b91c1c;
          transform: scale(1.03);
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.8);
        }
      `}</style>

      <div className="events-header">
        <h2 className="events-heading">
          <span className="highlight-red">G</span>YM <span className="highlight-red">V</span>IEW
        </h2>
      </div>

      {/* 3 Images Collage Layout with Hover Zoom & Glow */}
      <div className="collage-container-3">
        {/* Left Big Featured Photo (Picture 1) */}
        <div className="collage-item big-featured">
          <img src="/images/picture.1.png" alt="Event Photo 1" loading="lazy" />
        </div>

        {/* Right Side Stack (Picture 2 & 3) */}
        <div className="right-stack">
          <div className="collage-item">
            <img src="/images/picture.3.jpg" alt="Gym Interior Photo 3" loading="lazy" />
          </div>
          <div className="collage-item">
            <img src="/images/picture.2.jpeg" alt="Gym Interior Photo 2" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="instagram-btn-wrapper">
        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-instagram"
        >
          View More on Instagram
        </a>
      </div>
    </section>
  );
}