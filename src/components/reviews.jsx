import React, { useState } from 'react';

const initialReviews = [
  {
    id: 1,
    name: "Karan Kumar",
    rating: 5,
    comment: "Best gym in town! The trainers are super supportive and the equipment quality is top notch. Highly recommended for beginners and pros.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Priya Sundar",
    rating: 5,
    comment: "Amazing atmosphere with red glowing vibes and clean workout space. The weight training and cardio setups are fantastic!",
    date: "1 week ago"
  }
];

export default function Schedule() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showAll, setShowAll] = useState(false);
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
  const [hoverRating, setHoverRating] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      date: "Just now"
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: '', rating: 5, comment: '' });
    setIsFormOpen(false);
  };

  const displayedReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <section id="schedule" className="reviews-section">
      <style>{`
        .reviews-section {
          padding: 110px 24px;
          background: linear-gradient(180deg, #0b0b0b 0%, #050505 100%);
          color: #e5e7eb;
          width: 100%;
          border-top: 2px solid #dc2626;
          border-bottom: 2px solid #dc2626;
          box-shadow: 0 0 25px rgba(220, 38, 38, 0.35);
          position: relative;
          box-sizing: border-box;
        }
        .reviews-header {
          margin-bottom: 40px;
          text-align: center;
        }
        .reviews-heading {
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

        .reviews-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .review-card {
          background: linear-gradient(145deg, rgba(20, 20, 20, 0.85), rgba(10, 10, 10, 0.95));
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
          padding: 24px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          backdrop-filter: blur(10px);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .review-card:hover {
          border-color: rgba(220, 38, 38, 0.6);
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.25);
        }

        .review-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .review-author {
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
        }

        .review-stars {
          color: #f59e0b;
          font-size: 1rem;
          letter-spacing: 2px;
        }

        .review-comment {
          font-size: 0.95rem;
          color: #d4d4d4;
          line-height: 1.5;
        }

        .review-date {
          font-size: 0.75rem;
          color: #737373;
          font-family: monospace;
        }

        /* Interactive Star Rating Input */
        .star-rating-container {
          display: flex;
          gap: 6px;
          cursor: pointer;
        }
        .star-btn {
          background: transparent;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: #404040;
          padding: 0;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .star-btn.active {
          color: #f59e0b;
          text-shadow: 0 0 10px rgba(245, 158, 11, 0.6);
        }
        .star-btn:hover {
          transform: scale(1.2);
        }

        /* Action Buttons Area - Subdued Silver/Grey-White Tone */
        .reviews-actions {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 36px;
          flex-wrap: wrap;
        }

        .btn-action-muted {
          background-color: rgba(209, 213, 219, 0.15);
          color: #d1d5db;
          border: 1.5px solid rgba(209, 213, 219, 0.4);
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(209, 213, 219, 0.1);
          transition: all 0.3s ease;
        }
        .btn-action-muted:hover {
          background-color: rgba(209, 213, 219, 0.25);
          border-color: rgba(209, 213, 219, 0.8);
          color: #ffffff;
          box-shadow: 0 0 18px rgba(209, 213, 219, 0.25);
          transform: translateY(-2px);
        }

        /* Modal / Form Styling */
        .review-form-container {
          background: rgba(15, 15, 15, 0.95);
          border: 2px solid #dc2626;
          box-shadow: 0 0 30px rgba(220, 38, 38, 0.5);
          padding: 30px;
          border-radius: 12px;
          max-width: 800px;
          margin: 0 auto 30px auto;
          box-sizing: border-box;
        }

        .review-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #a3a3a3;
          text-transform: uppercase;
        }

        .form-input, .form-textarea {
          background: #0b0b0b;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px;
          border-radius: 6px;
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .form-input:focus, .form-textarea:focus {
          border-color: #dc2626;
          box-shadow: 0 0 10px rgba(220, 38, 38, 0.4);
        }

        .form-buttons {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 10px;
        }

        .btn-cancel {
          background: transparent;
          color: #a3a3a3;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 700;
        }
        .btn-cancel:hover {
          color: #fff;
          border-color: #fff;
        }
      `}</style>

      <div className="reviews-header">
        <h2 className="reviews-heading">
          <span className="highlight-red">C</span>LIENT <span className="highlight-red">R</span>EVIEWS
        </h2>
      </div>

      <div className="reviews-container">
        {/* Add Review Form Dropdown */}
        {isFormOpen && (
          <div className="review-form-container">
            <form onSubmit={handleSubmit} className="review-form">
              <h3 style={{ color: '#fff', margin: '0 0 10px 0', fontStyle: 'italic', textTransform: 'uppercase' }}>
                Write a Review
              </h3>
              
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </div>

              {/* Professional Clickable Star Rating Input */}
              <div className="form-group">
                <label>Rating Experience</label>
                <div className="star-rating-container">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${(hoverRating || formData.rating) >= star ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, rating: star})}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`${star} Star`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>Your Review</label>
                <textarea 
                  className="form-textarea" 
                  rows="3" 
                  placeholder="Share your experience at TLK Unisex Fitness Zone..."
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  required
                ></textarea>
              </div>

              <div className="form-buttons">
                <button type="button" className="btn-cancel" onClick={() => setIsFormOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-action-muted">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Display Reviews (Shows max 2 unless View More is clicked) */}
        {displayedReviews.map((rev) => (
          <div key={rev.id} className="review-card">
            <div className="review-top">
              <span className="review-author">{rev.name}</span>
              <div className="review-stars">
                {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
              </div>
            </div>
            <p className="review-comment">"{rev.comment}"</p>
            <span className="review-date">{rev.date}</span>
          </div>
        ))}

        {/* Action Controls with Muted Grey-White Buttons */}
        <div className="reviews-actions">
          {!isFormOpen && (
            <button className="btn-action-muted" onClick={() => setIsFormOpen(true)}>
              + Add Your Review
            </button>
          )}

          {reviews.length > 2 && (
            <button className="btn-action-muted" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : `View More Reviews (${reviews.length - 2} more)`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}