import React from 'react';

const scheduleData = [
  { day: "Monday", time: "06:00 AM - 09:00 PM", workout: "Strength & Conditioning", trainer: "Alex" },
  { day: "Tuesday", time: "06:00 AM - 09:00 PM", workout: "High-Intensity Crossfit", trainer: "Sarah" },
  { day: "Wednesday", time: "06:00 AM - 09:00 PM", workout: "Powerlifting & Core", trainer: "Mike" },
  { day: "Thursday", time: "06:00 AM - 09:00 PM", workout: "Functional Training", trainer: "Alex" },
  { day: "Friday", time: "06:00 AM - 09:00 PM", workout: "Endurance & Agility", trainer: "Sarah" },
  { day: "Saturday", time: "07:00 AM - 06:00 PM", workout: "Full Body Blast", trainer: "Mike" }
];

export default function Schedule() {
  return (
    <section id="schedule" className="schedule-section">
      <style>{`
        .schedule-section {
          padding: 120px 24px; /* Increased top and bottom padding for more gap */
          background-color: #0b0b0b;
          color: #e5e7eb;
          width: 100%;
          border-top: 2px solid #dc2626;
          border-bottom: 2px solid #dc2626;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
        }

        .schedule-header {
          margin-bottom: 64px; /* Increased bottom margin for more gap above cards */
          text-align: center;
        }

        .schedule-heading {
          font-size: 2.5rem;
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          color: #ffffff;
          margin-top: 0;
        }

        .highlight-red {
          color: #dc2626;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.6);
        }

        /* Schedule Cards Grid */
        .schedule-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1050px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .schedule-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 600px) {
          .schedule-grid {
            grid-template-columns: 1fr;
          }
        }

        .schedule-card {
          background-color: rgba(23, 23, 23, 0.6);
          border: 1px solid #262626;
          padding: 24px;
          border-radius: 8px;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .schedule-card:hover {
          transform: translateY(-5px);
          border-color: #dc2626;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
        }

        .schedule-day {
          font-size: 1.25rem;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 8px;
          border-bottom: 1px solid #262626;
          padding-bottom: 8px;
        }

        .schedule-time {
          font-size: 0.85rem;
          color: #f87171;
          font-family: monospace;
          margin-bottom: 12px;
        }

        .schedule-workout {
          font-size: 1rem;
          font-weight: 700;
          color: #e5e7eb;
          margin-bottom: 8px;
        }

        .schedule-trainer {
          font-size: 0.85rem;
          color: #a3a3a3;
        }
      `}</style>

      <div className="schedule-header">
        <h2 className="schedule-heading">
          <span className="highlight-red">C</span>LASS <span className="highlight-red">S</span>CHEDULE
        </h2>
      </div>

      <div className="schedule-grid">
        {scheduleData.map((item, index) => (
          <div key={index} className="schedule-card">
            <h3 className="schedule-day">{item.day}</h3>
            <div className="schedule-time">{item.time}</div>
            <div className="schedule-workout">{item.workout}</div>
            <div className="schedule-trainer">Trainer: <strong>{item.trainer}</strong></div>
          </div>
        ))}
      </div>
    </section>
  );
}