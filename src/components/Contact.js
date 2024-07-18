import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.from(contactRef.current, { opacity: 0, x: -50, duration: 1 });
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <h2>Contact Me</h2>
      <form>
        {/* Add contact form here */}
      </form>
    </section>
  );
};

export default Contact;
