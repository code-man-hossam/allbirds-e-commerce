import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner'>
      <h1>Give Light. Tread Lighter.</h1>

      <div className='bannerBtns'>
        <Link to='/gifts-men'>
          <button>GIFTS FOR HIM</button>
        </Link>

        <Link to='/gifts-women'>
          <button>GIFTS FOR HER</button>
        </Link>
      </div>
    </div>
  )
}

export default Banner
