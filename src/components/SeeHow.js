import React from 'react'
import './seeHow.css'
import sheep from '../assets/sheep.mp4'

const SeeHow = () => {
  return (
    <div className='seeHow'>
      <video src={sheep} className='video' autoPlay muted loop />
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
