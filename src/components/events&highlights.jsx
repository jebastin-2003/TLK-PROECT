import React, { useEffect, useRef } from 'react';

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/tlk_unisex_fitness_zone?utm_source=ig_web_button_share_sheet&xtok=ZDNlZDc0MzIxNw==";

const photosList = [
  { id: 1, imgSrc: "/images/picture.1.png" },
  { id: 2, imgSrc: "/images/picture.2.jpg" },
  { id: 3, imgSrc: "/images/picture.3.jpg" },
  { id: 4, imgSrc: "/images/picture.4.jpg" }
];

const videosList = [
  { id: 1, videoSrc: "/videos/video.1.mp4" },
  { id: 2, videoSrc: "/videos/video.2.mp4" },
  { id: 3, videoSrc: "/videos/video.3.mp4" },
  { id: 4, videoSrc: "/videos/video.4.mp4" }
];

export default function EventsAndHighlights() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Video 30% screen-la theriyum pothu play aagum
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Auto-play policy fallback handling for mobile browsers
          });
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

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
        .grid-4-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          max-width: 850px;
          margin: 0 auto 20px auto;
          justify-items: center;
        }
        @media (max-width: 768px) {
          .grid-4-columns {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
        .media-card {
          background-color: #050505;
          border: 1px solid #262626;
          padding: 0;
          overflow: hidden;
          width: 100%;
          max-width: 140px;
          border-radius: 10px;
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
          aspect-ratio: 9 / 16;
          background-color: #050505;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
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
          <span className="highlight-red">E</span>VENTS & <span className="highlight-red">H</span>IGHLIGHTS
        </h2>
      </div>

      <div className="grid-4-columns">
        {photosList.map((item) => (
          <div key={item.id} className="media-card">
            <div className="media-box-fitted">
              <img
                src={item.imgSrc}
                alt={`Event Photo ${item.id}`}
                className="fitted-content"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid-4-columns">
        {videosList.map((item, index) => (
          <div key={item.id} className="media-card">
            <div className="media-box-fitted">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.videoSrc}
                loop
                muted
                playsInline
                preload="metadata"
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