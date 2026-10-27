import React from 'react';
import Navbar from './components/novbar.jsx';
import Hero from './components/hero.jsx';
import EventsAndHighlights from './components/events&highlights.jsx';
import Membership from './components/memberships.jsx';
import Schedule from './components/schedule.jsx';
import Contact from './components/contact.jsx';
import FloatingSocials from './components/FloatingSocials.jsx';
import Footer from './components/footer.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EventsAndHighlights />
      <Membership />
      <Schedule />
      <Contact />
      
      {/* Floating Action Buttons */}
      <FloatingSocials />

      {/* Main Footer Component */}
      <Footer />
    </div>
  );
}