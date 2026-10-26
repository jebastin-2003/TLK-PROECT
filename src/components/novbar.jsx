import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <span style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '0.1em', color: '#fff', fontStyle: 'italic' }}>
          IRON<span style={{ color: '#dc2626' }}>PULSE</span>
        </span>
      </div>
      <div className="nav-links">
        <a href="#">HOME</a>
        <a href="#programs">EVENTS & HIGHLIGHTS</a>
        <a href="#schedule">SCHEDULE</a>
        <a href="#membership">MEMBERSHIP</a>
        <a href="#contact">CONTACT</a>
      </div>
      <div>
        <a href="#contact" className="btn-red" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
          Join Now
        </a>
      </div>
    </nav>
  );
}