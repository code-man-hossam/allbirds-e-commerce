import React, { useState } from 'react'
import './category.css'
import { shoppingData } from './ShopData'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const Category = () => {
  const [firstMove, setFirstMove] = useState(false)

  return (
    <div className='category'>
      <h1>Shop By Category</h1>
      <div className={firstMove ? 'container firstMove' : 'container'}>
        {shoppingData.map((item) => {
          const { id, title, img } = item

          return (
            <div className='col' key={id}>
              <div className='colImg'>
                <img src={img} alt='' />
              </div>
              <h3>{title}</h3>
            </div>
          )
        })}
      </div>
      <button
        onClick={() => setFirstMove(true)}
        className={firstMove ? 'leftBtn hide' : 'leftBtn'}
      >
        <ArrowForwardIosIcon />
      </button>
      <button
        onClick={() => setFirstMove(false)}
        className={firstMove ? 'rightBtn' : 'rightBtn hide'}
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  )
}

export default Category
