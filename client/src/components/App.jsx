import React, { useState } from 'react';
import Header from './Header.jsx';
import Lane from './Lane.jsx';
import './App.css';

function App() {
  const [ score, setScore ] = useState([
    [], [], [], [], [],
    [], [], [], [], [], []
  ]);

  const updateScore = (score, frame, turn) => {
    setScore(prev => {
      let updatedScore = [...prev];
      let currentFrame = frame - 1;
      let previousFrame = frame - 2;
      let twoFramesPrev = frame - 3;
      if (updatedScore[currentFrame].length === 0) {
        updatedScore[currentFrame] = turn;
      } else {
        let temp = updatedScore[currentFrame];
        updatedScore[currentFrame] = temp + turn;
      }
    });
  };

  return (
    <>
      <Header score={score}/>
      <Lane updateScore={updateScore}/>
    </>
  );
};

export default App;