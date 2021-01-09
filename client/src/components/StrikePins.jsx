import React from 'react';
import './StrikePins.css';
import bowlingPin from '../images/bowlingpin.png';

function StrikePins() {
  return (
    <>
      <article className='pins-last-row'>
        <img className='bowling-pin right' src={bowlingPin}/>
        <img className='bowling-pin down-right' src={bowlingPin}/>
        <img className='bowling-pin left' src={bowlingPin}/>
        <img className='bowling-pin left' src={bowlingPin}/>
      </article>
      <article className='pins-third-row'>
        <img className='bowling-pin down-right' src={bowlingPin}/>
        <img className='bowling-pin left' src={bowlingPin}/>
        <img className='bowling-pin down-right' src={bowlingPin}/>
      </article>
      <article className='pins-second-row'>
        <img className='bowling-pin left' src={bowlingPin}/>
        <img className='bowling-pin  down-right' src={bowlingPin}/>
      </article>
      <article className='pins-first-row'>
        <img className='bowling-pin left' src={bowlingPin}/>
      </article>
    </>
  );
};

export default StrikePins;