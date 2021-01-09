import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Lane from './Lane.jsx';
import getScore from './getScore.js';
import './App.css';

function App() {
  const [ frames, setFrames ] = useState([3, 5, 8]);
  const [ score, setScore ] = useState(0);

  const updateScore = () => {
    setScore(getScore(frames));
  };

  useEffect(() => {
    updateScore();
  }, []);

  return (
    <>
      <Header score={score}/>
      <Lane updateScore={updateScore}/>
    </>
  );
};

export default App;