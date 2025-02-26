import React from 'react'
import NuggetPhoto from '../images/nugget-photo.png';

const Hero = () => {
  return (
    <div className='hero'>
        <img 
            src={NuggetPhoto}
            alt='Nugget'
            className='hero-image'
        />
        <div className='hero-text'>
            <h1>Helloo, I'm Nugget!</h1>
            <p>Me need money bad.</p>
        </div>
      
    </div>
  )
}

export default Hero
