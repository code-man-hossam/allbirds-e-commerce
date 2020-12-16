import React, { useEffect, useState } from 'react'
import './favorite.css'
import { favArr } from '../data'
import { btnArr } from '../data'
import { Link } from 'react-router-dom'

const Favorite = () => {
  const [value, setValue] = useState(0)
  const [secIndex, setSecIndex] = useState(false)
  const [lastIndex, setLastIndex] = useState(false)
  const currArr = favArr[value]

  const { id, images, title, info } = currArr

  const displayFav = (e) => {
    setValue(e.target.id)
  }

  useEffect(() => {
    if (id === 0) {
      setSecIndex(false)
      setLastIndex(false)
    }
    if (id === 1) {
      setSecIndex(true)
      setLastIndex(false)
    }
    if (id === 2) {
      setLastIndex(true)
      setSecIndex(false)
    }
  }, [currArr, id])

  return (
    <div className='favorite'>
      <h1>Some Of Our Favorites</h1>
      <div className='btns'>
        {btnArr.map((btn) => {
          const { id, title } = btn
          return (
            <button key={id} id={id} onClick={displayFav}>
              {title}
            </button>
          )
        })}
        <div
          className={
            secIndex
              ? 'underline secIndex'
              : lastIndex
              ? 'underline lastIndex'
              : 'underline'
          }
        ></div>
      </div>
      <div className='favCols'>
        <div className='col-4'>
          <div className='colImg'>
            <img src={images[0]} alt='' />
          </div>
          <div className='overley'>
            <button>
              <Link to='/shop-men'>SHOP MENS</Link>
            </button>
            <button>
              <Link to='/shop-women'>SHOP WOMENS</Link>
            </button>
          </div>
          <h3>{title[0]}</h3>
          <p>{info[0]}</p>
        </div>
        <div className='col-4'>
          <div className='colImg'>
            <img src={images[1]} alt='' />
          </div>
          <div className='overley'>
            <button>
              <Link to='/shop-men'>SHOP MENS</Link>
            </button>
            <button>
              <Link to='/shop-women'>SHOP WOMENS</Link>
            </button>
          </div>
          <h3>{title[1]}</h3>
          <p>{info[1]}</p>
        </div>
        <div className='col-4'>
          <div className='colImg'>
            <img src={images[2]} alt='' />
          </div>
          <div className='overley'>
            <button>
              <Link to='/shop-men'>SHOP MENS</Link>
            </button>
            <button>
              <Link to='/shop-women'>SHOP WOMENS</Link>
            </button>
          </div>
          <h3>{title[2]}</h3>
          <p>{info[2]}</p>
        </div>
      </div>
    </div>
  )
}

export default Favorite
