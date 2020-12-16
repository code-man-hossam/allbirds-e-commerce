import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import PersonIcon from '@material-ui/icons/Person'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import CloseIcon from '@material-ui/icons/Close'
import logo from './allbirds.png'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {
    isNavlinksOpen,
    openNavlinks,
    openShoppingCart,
    toggleAllbirdsLists,
  } = useGlobalContext()

  return (
    <nav className='navbar'>
      <button className='bars' onClick={openNavlinks}>
        {isNavlinksOpen ? <CloseIcon /> : <MenuOpenIcon />}
      </button>
      <ul className='nav-category'>
        <li>
          <button onClick={toggleAllbirdsLists}>MEN</button>
        </li>
        <li>
          <button onClick={toggleAllbirdsLists}>WOMEN</button>
        </li>
        <li>
          <Link to='/kids'>KIDS</Link>
        </li>
      </ul>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='allbirds' />
        </Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link to='/materials'>OUR METRIALS</Link>
        </li>
        <li>
          <Link to='#'>STORES</Link>
        </li>
        <li>
          <Link to='/accounts'>
            <PersonIcon />
          </Link>
        </li>
        <li>
          <Link to='#'>
            <HelpOutlineIcon />
          </Link>
        </li>
        <li>
          <button onClick={openShoppingCart}>
            <AddShoppingCartIcon />
          </button>
        </li>
      </ul>
      <button className='nav-shop' onClick={openShoppingCart}>
        <AddShoppingCartIcon />
      </button>
    </nav>
  )
}

export default Navbar
