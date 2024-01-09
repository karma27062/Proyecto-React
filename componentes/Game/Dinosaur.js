import React, { useState, useEffect } from 'react';
import dinosaurImage from '.../images/Dinosaur.png';

const Dinosaur = ({ isGameOver, onGameOver }) => {
  const [position, setPosition] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 32 && !isJumping) { // Spacebar key and not already jumping
        jump();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isJumping]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isGameOver) {
        setPosition((prevPosition) => prevPosition + 1);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [isGameOver]);

  useEffect(() => {
    if (position >= 100) { // Condición de fin del juego
      onGameOver();
    }
  }, [position, onGameOver]);

  const jump = () => {
    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 500);
  };

  return (
    <div className="dinosaur" style={{ left: `${position}px` }}>
      <img src={dinosaurImage} alt="Dinosaurio" style={{ width: '50px', height: '50px' }} />
    </div>
  );
};

export default Dinosaur;
