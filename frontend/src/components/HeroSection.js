import React from 'react';
import { Button } from './Button';
// import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/chanel.mp4' autoPlay loop />
      <p>LE PARIS RUSSE DE CHANEL</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/hero'
        >
          VIEW COLLECTION
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;