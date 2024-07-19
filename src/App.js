import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const move = (e) => {
    const touchEvent = e.touches ? e.touches[0] : null;
    const x = touchEvent ? touchEvent.clientX : e.clientX;
    const y = touchEvent ? touchEvent.clientY : e.clientY;

    setCursorX(x);
    setCursorY(y);

    const cursorBorder = document.getElementById('cursor-border');
    if (cursorBorder) {
      cursorBorder.style.left = `${x}px`;
      cursorBorder.style.top = `${y}px`;
    }
  };

  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  const handleButtonHover = (hovered) => {
    setButtonHovered(hovered);
  };

  useEffect(() => {
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="App">
      <div
        id="cursor"
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      ></div>
      <div id="cursor-border"></div>

      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
