import React, { useEffect, useRef } from 'react';

const scheduleData = [
  { 
    day: "Monday", 
    workout: "Lats Class",
    exercises: ["Lat Pulldown", "Seated Cable Row", "Barbell Row"]
  },
  { 
    day: "Tuesday", 
    workout: "Chest Class",
    exercises: ["Bench Press", "Incline Dumbbell Press", "Chest Flyes"]
  },
  { 
    day: "Wednesday", 
    workout: "Biceps Class",
    exercises: ["Barbell Curl", "Dumbbell Hammer Curl", "Preacher Curl"]
  },
  { 
    day: "Thursday", 
    workout: "Shoulder Class",
    exercises: ["Overhead Press", "Lateral Raise", "Front Dumbbell Raise"]
  },
  { 
    day: "Friday", 
    workout: "Triceps Class",
    exercises: ["Rope Pushdown", "Skull Crushers", "Triceps Dips"]
  },
  { 
    day: "Saturday", 
    workout: "Leg Class",
    exercises: ["Barbell Squats", "Leg Press", "Leg Extensions"]
  }
];

export default function Schedule() {
  const cardRefs = useRef([]);
  const gridRef = useRef(null);

  useEffect(() => {
    // 1. Intersection Observer for fade/scale animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    // 2. Automatic Auto-Slide for Mobile View
    let intervalId = null;
    const grid = gridRef.current;

    const startAutoScroll = () => {
      if (window.innerWidth <= 600 && grid) {
        intervalId = setInterval(() => {
          const cardWidth = grid.querySelector('.schedule-card')?.offsetWidth || 280;
          const maxScrollLeft = grid.scrollWidth - grid.clientWidth;
          
          if (grid.scrollLeft >= maxScrollLeft - 10) {
            grid.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            grid.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
          }
        }, 3000); // Ovoru 3 seconds-kum automatic-a move aagum
      }
    };

    startAutoScroll();

    // Pause auto-scroll when user manually interacts/swipes
    const handleTouchStart = () => {
      if (intervalId) clearInterval(intervalId);
    };

    if (grid) {
      grid.addEventListener('touchstart', handleTouchStart);
      grid.addEventListener('mousedown', handleTouchStart);
    }

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      if (intervalId) clearInterval(intervalId);
      if (grid) {
        grid.removeEventListener('touchstart', handleTouchStart);
        grid.removeEventListener('mousedown', handleTouchStart);
      }
    };
  }, []);

  return (
    <section id="schedule" className="schedule-section">
      <style>{`
        .schedule-section {
          padding: 110px 24px;
          background: linear-gradient(180deg, #0b0b0b 0%, #050505 100%);
          color: #e5e7eb;
          width: 100%;
          border-top: 2px solid #dc2626;
          border-bottom: 2px solid #dc2626;
          box-shadow: 0 0 25px rgba(220, 38, 38, 0.35);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }
        .schedule-header {
          margin-bottom: 56px;
          text-align: center;
        }
        .schedule-heading {
          font-size: 2.8rem;
          font-weight: 900;
          font-style: italic;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
          letter-spacing: 0.05em;
        }
        .highlight-red {
          color: #dc2626;
          text-shadow: 0 0 12px rgba(220, 38, 38, 0.7);
        }
        
        /* PC & Laptop: 3 columns grid */
        .schedule-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .schedule-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }

        /* Mobile View: Horizontal Smooth Auto/Manual Scroll Snap */
        @media (max-width: 600px) {
          .schedule-section {
            padding: 80px 0;
          }
          .schedule-header {
            padding: 0 24px;
            margin-bottom: 35px;
          }
          .schedule-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            gap: 16px;
            padding: 10px 24px 30px 24px;
            justify-content: flex-start;
            scrollbar-width: none;
          }
          .schedule-grid::-webkit-scrollbar {
            display: none;
          }
          .schedule-card {
            min-width: 82vw;
            max-width: 82vw;
            scroll-snap-align: center;
            flex-shrink: 0;
            opacity: 0.5;
            transform: scale(0.95);
            transition: transform 0.4s ease, opacity 0.4s ease, border-color 0.4s ease;
          }
          .schedule-card.slide-in-active {
            opacity: 1;
            transform: scale(1);
          }
        }

        .schedule-card {
          background: linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(10, 10, 10, 0.95));
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.08), inset 0 0 10px rgba(255, 255, 255, 0.03);
          padding: 32px 24px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .schedule-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #dc2626;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .schedule-card:hover {
          transform: translateY(-6px);
          border-color: rgba(220, 38, 38, 0.7);
          box-shadow: 0 12px 30px rgba(220, 38, 38, 0.3), 0 0 20px rgba(255, 255, 255, 0.15);
        }
        .schedule-card:hover::before {
          opacity: 1;
        }

        /* Clean Weekday Heading */
        .schedule-day {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 14px;
          padding-bottom: 10px;
          width: 100%;
          letter-spacing: 0.05em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Class Workout Heading Box with White Color Glow */
        .schedule-workout {
          color: #dc2626;
          background: rgba(220, 38, 38, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.4);
          font-family: monospace;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 16px;
          text-shadow: 0 0 8px rgba(220, 38, 38, 0.5);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.25), inset 0 0 6px rgba(255, 255, 255, 0.1);
        }

        .exercise-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 100%;
        }
        .exercise-item {
          font-size: 0.82rem;
          color: #a3a3a3;
          background: rgba(255, 255, 255, 0.03);
          padding: 6px 10px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          letter-spacing: 0.03em;
        }
      `}</style>

      <div className="schedule-header">
        <h2 className="schedule-heading">
          <span className="highlight-red">C</span>LASS <span className="highlight-red">S</span>CHEDULE
        </h2>
      </div>

      <div className="schedule-grid" ref={gridRef}>
        {scheduleData.map((item, index) => {
          const firstLetter = item.day.charAt(0);
          const restOfWord = item.day.slice(1);
          return (
            <div 
              key={index} 
              className="schedule-card"
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="schedule-day">
                <span className="highlight-red">{firstLetter}</span>
                {restOfWord}
              </h3>
              <div className="schedule-workout">{item.workout}</div>
              <div className="exercise-list">
                {item.exercises.map((ex, exIndex) => (
                  <div key={exIndex} className="exercise-item">
                    • {ex}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}