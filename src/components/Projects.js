import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.from(projectsRef.current, { opacity: 70, x: -50, duration: 20 });
  }, []);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <h2>My Projects</h2>
      <div className="project-list">
        Lst Projects
      </div>
    </section>
  );
};

export default Projects;
