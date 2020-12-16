import React from 'react'
import { Link } from 'react-router-dom'
import './navlinks.css'
import { useGlobalContext } from './context'

const Navlinks = () => {
  const { isNavlinksOpen } = useGlobalContext()

  return (
    <div className={isNavlinksOpen ? 'navlinks show' : 'navlinks'}>
      <ul>
        <li>
          <Link to='/shop-men'>
            <button>MEN</button>
          </Link>
        </li>
        <li>
          <Link to='/shop-women'>
            <button>WOMEN</button>
          </Link>
        </li>
        <li>
          <Link to='/kids'>KIDS</Link>
        </li>
        <li>
          <Link to='/gifts-men'>GIFTS</Link>
        </li>
        <li>
          <Link to='/materials'>OUR MATERIALS</Link>
        </li>
        <li>
          <Link to='#'>STORES</Link>
        </li>
        <li>
          <Link to='/accounts'>Account</Link>
        </li>
        <li>
          <Link to='#'>Help</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navlinks
