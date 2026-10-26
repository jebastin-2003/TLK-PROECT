import React from 'react';

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/ironpulse_gym";

// Placeholder images & videos
const photosList = [
  { id: 1, imgSrc: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop" },
  { id: 2, imgSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" },
  { id: 3, imgSrc: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop" },
  { id: 4, imgSrc: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=400&auto=format&fit=crop" }
];

const videosList = [
  { id: 1, videoSrc: "/videos/event 1.mp4" },
  { id: 2, videoSrc: "/videos/event 1.mp4" },
  { id: 3, videoSrc: "/videos/event 1.mp4" },
  { id: 4, videoSrc: "/videos/event 1.mp4" }
];

export default function EventsAndHighlights() {
  return (
    <section id="events-highlights" className="events-section">
      <style>{`
        /* Full width left to right border lines and styling */
        .events-section {
          padding: 50px 24px;
          background-color: #0b0b0b;
          color: #e5e7eb;
          width: 100%;
          border-top: 2px solid #dc2626;
          border-bottom: 2px solid #dc2626;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
        }

        .events-header {
          margin-bottom: 30px;
          text-align: center;
        }

        .events-tag {
          color: #dc2626;
          font-family: monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .events-heading {
          font-size: 2rem;
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          color: #ffffff;
          margin-top: 4px;
        }

        .highlight-red {
          color: #dc2626;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.6);
        }

        .section-subtitle {
          font-size: 0.9rem;
          font-weight: 700;
          color: #dc2626;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin: 20px 0 12px 0;
          text-align: center;
        }

        /* 4 Columns Uniform Grid */
        .grid-4-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1050px;
          margin: 0 auto 24px auto;
        }

        @media (max-width: 900px) {
          .grid-4-columns {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        /* Outer Box Card with Red Glow on Hover */
        .media-card {
          background-color: rgba(23, 23, 23, 0.6);
          border: 1px solid #262626;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          cursor: pointer;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .media-card:hover {
          transform: scale(1.05);
          border-color: #dc2626;
          box-shadow: 0 0 18px rgba(220, 38, 38, 0.6);
        }

        .media-box-fitted {
          width: 100%;
          max-width: 160px;
          aspect-ratio: 9 / 16;
          background-color: #050505;
          border: 1px solid #262626;
          overflow: hidden;
          position: relative;
          border-radius: 4px;
        }

        .fitted-content {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .instagram-btn-wrapper {
          display: flex;
          justify-content: center;
          margin-top: 36px;
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
        <span className="events-tag">// 03. SPECIAL OCCASIONS & ACTIVITIES</span>
        <h2 className="events-heading">
          <span className="highlight-red">E</span>VENTS & <span className="highlight-red">H</span>IGHLIGHTS
        </h2>
      </div>

      {/* Top 4 Photos */}
      <div className="grid-4-columns">
        {photosList.map((item) => (
          <div key={item.id} className="media-card">
            <div className="media-box-fitted">
              <img
                src={item.imgSrc}
                alt={`Event Photo ${item.id}`}
                className="fitted-content"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom 4 Videos */}
      <div className="grid-4-columns">
        {videosList.map((item) => (
          <div key={item.id} className="media-card">
            <div className="media-box-fitted">
              <video
                src={item.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="fitted-content"
              />
            </div>
          </div>
        ))}
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