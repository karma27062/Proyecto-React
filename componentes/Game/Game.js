import React, { useState, useEffect } from 'react';
import Dinosaur from './Dinosaur';
import Cactus from './Cactus';
import "../css/Game.css"

const Game = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isGameStarted && !isGameOver && event.keyCode === 32) {
        // Jump logic here
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGameStarted, isGameOver]);

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  return (
    <div className="game-container">
      <h1>{isGameOver ? 'Game Over' : isGameStarted ? 'Dinosaur Game' : 'Click Iniciar para Jugar'}</h1>
      {isGameStarted ? (
        <>
          <div className="centered">
            <Dinosaur isGameOver={isGameOver} onGameOver={handleGameOver} />
          </div>
          <Cactus />
        </>
      ) : (
        <button onClick={startGame}>Iniciar</button>
      )}
    </div>
  );
};

export default Game;
