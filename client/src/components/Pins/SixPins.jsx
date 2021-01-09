import React from 'react';
import bowlingPin from '../../images/bowlingpin.png';

function SixPins({ showDownPins }) {
  const down = (
    <>
      <article className='pins-last-row'>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin right' src={bowlingPin}/>
        <img className='bowling-pin left' src={bowlingPin}/>
      </article>
      <article className='pins-third-row'>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin right' src={bowlingPin}/>
      </article>
      <article className='pins-second-row'>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin left' src={bowlingPin}/>
      </article>
      <article className='pins-first-row'>
        <img className='bowling-pin' src={bowlingPin}/>
      </article>
    </>
  );

  if (showDownPins) {
    return down;
  }

  return (
    <>
      <article className='pins-last-row'>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
      </article>
      <article className='pins-third-row'>
        <img className='bowling-pin' src={bowlingPin}/>
        <img className='bowling-pin' src={bowlingPin}/>
      </article>
      <article className='pins-second-row'>
        <img className='bowling-pin' src={bowlingPin}/>
      </article>
      <article className='pins-first-row'>
        <img className='bowling-pin' src={bowlingPin}/>
      </article>
    </>
  );
};

export default SixPins;