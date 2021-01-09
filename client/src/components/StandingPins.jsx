import React from 'react';
import './StandingPins.css';
import bowlingPin from '../images/bowlingpin.png';

function StandingPins() {
  return (
    <>
      <article className='pins-last-row'>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
      </article>
      <article className='pins-third-row'>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
      </article>
      <article className='pins-second-row'>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
      </article>
      <article className='pins-first-row'>
        <img className='bowling-pin' src={bowlingPin}/>
      </article>
    </>
  );
};

export default StandingPins;