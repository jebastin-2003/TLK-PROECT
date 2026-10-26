import React from 'react';
import Navbar from './components/novbar.jsx';
import Hero from './components/hero.jsx';
import Schedule from './components/schedule.jsx';
import EventsAndHighlights from './components/events&highlights.jsx';
import Membership from './components/memberships.jsx';
import Contact from './components/contact.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EventsAndHighlights />
      <Schedule />
      <Membership />
      <Contact />
      <footer style={{ padding: '32px', textAlign: 'center', fontSize: '0.75rem', color: '#525252', borderTop: '1px solid #171717', fontFamily: 'monospace' }}>
        © 2026 IRONPULSE GYM STUDIOS. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
} 