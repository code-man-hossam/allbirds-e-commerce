import React, { useRef, useState } from 'react'
import './shoes.css'
import { ShoesImgs } from './ShopData'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Link } from 'react-router-dom'

const Shoes = () => {
  const containerRef = useRef(null)
  const [value, setValue] = useState(420)
  const [hideLeftBtn, setHideLeftBtn] = useState(false)
  const [hideRightBtn, setHideRightBtn] = useState(true)

  const moveContainerLeft = () => {
    setHideRightBtn(false)
    containerRef.current.style.transform = `translateX(${-value}px)`
    setValue(value + 420)
    if (value === 2100) {
      setValue(2100)
      setHideLeftBtn(true)
    }
  }
  const moveContainerRight = () => {
    setHideLeftBtn(false)
    containerRef.current.style.transform = `translateX(${-value}px)`
    setValue(value - 420)
    if (value < 420) {
      setValue(0)
      setHideRightBtn(true)
    }
  }

  return (
    <div className='shoes'>
      <h1>Winter Favorites</h1>
      <div className='shoe-container' ref={containerRef}>
        {ShoesImgs.map((item) => {
          const { id, img, title, info } = item

          return (
            <Link to={`/shop-shoes/${id}`}>
              <div className='shoe-col' key={id}>
                <div className='shoe-colImg'>
                  <img src={img} alt='' />
                </div>
                <h3>{title}</h3>
                <p>{info}</p>
              </div>
            </Link>
          )
        })}
      </div>
      <button
        onClick={moveContainerLeft}
        className={hideLeftBtn ? 'shoe-leftBtn hide' : 'shoe-leftBtn'}
      >
        <ArrowForwardIosIcon />
      </button>
      <button
        onClick={moveContainerRight}
        className={hideRightBtn ? 'shoe-rightBtn hide' : 'shoe-rightBtn'}
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  )
}

export default Shoes
