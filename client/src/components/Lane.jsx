import React, { useState, useEffect } from 'react';
import './Lane.css';
import ball from '../images/bowlingball.png';
import StandingPins from './StandingPins.jsx';
import StrikePins from './StrikePins.jsx';
import OnePin from './Pins/OnePin.jsx';
import TwoPins from './Pins/TwoPins.jsx';
import ThreePins from './Pins/ThreePins.jsx';
import FourPins from './Pins/FourPins.jsx';
import FivePins from './Pins/FivePins.jsx';
import SixPins from './Pins/SixPins.jsx';
import SevenPins from './Pins/SevenPins.jsx';
import EightPins from './Pins/EightPins.jsx';
import NinePins from './Pins/NinePins.jsx';

function Lane() {
  const [ bowl, setBowl ] = useState(false);
  const [ cleanPins, setCleanPins ] = useState(true);
  const [ showDownPins, setDownPins ] = useState(true);
  const ballClass = bowl ? 'ball rolling-ball' : 'ball';
  const pins = {
    1: <OnePin showDownPins={showDownPins}/>,
    2: <TwoPins showDownPins={showDownPins}/>,
    3: <ThreePins showDownPins={showDownPins}/>,
    4: <FourPins showDownPins={showDownPins}/>,
    5: <FivePins showDownPins={showDownPins}/>,
    6: <SixPins showDownPins={showDownPins}/>,
    7: <SevenPins showDownPins={showDownPins}/>,
    8: <EightPins showDownPins={showDownPins}/>,
    9: <NinePins showDownPins={showDownPins}/>,
    10: <StrikePins showDownPins={showDownPins}/>
  };

  useEffect(() => {
    if (bowl) {
      setTimeout(() => setCleanPins(false), 1000);
    }
  }), [bowl];

  const handleClick = event => {
    setBowl(true);
  };

  const getRandomNumber = (range = 10) => {
    return Math.floor(Math.random() * (range + 1))
  };

  return (
    <section className='container'>
      <section className='lane'>
        {cleanPins ? <StandingPins /> : pins[1]}
        <img
          className={ballClass}
          onClick={handleClick}
          src={ball}
        />
      </section>
    </section>
  );
};

export default Lane;