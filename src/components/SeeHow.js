import React from 'react'
import './seeHow.css'

const SeeHow = () => {
  return (
    <div className='seeHow'>
      <div className='video'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/pp-mZsbRGE4?loop=1&autoplay=1&mute=1&controls=0'
          frameborder='0'
          allowfullscreen
        ></iframe>
      </div>
      <div className='desc'>
        <h1>Made From Nature, For Nature</h1>
        <p>
          We craft with planet-friendly natural materials, like merino wool and
          eucalyptus trees, because they're our best chance for a sustainable
          future.
        </p>
        <button>SEE HOW</button>
      </div>
    </div>
  )
}

export default SeeHow
