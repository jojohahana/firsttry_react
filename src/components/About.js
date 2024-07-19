import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, { opacity: 70, x: -50, duration: 20 });
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        I am a passionate developer with experience in creating dynamic web applications.
      </p>
    </section>
  );
};

export default About;
