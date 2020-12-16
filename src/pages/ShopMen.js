import React, { useState } from 'react'
import './shopMen.css'
import { useGlobalContext } from '../context'

const ShopMen = () => {
  const { AddItemToCard } = useGlobalContext()
  const [SizeButtonActive, setSizeButtonActive] = useState(false)
  const SizeArr = ['S', 'M', 'L', 'XL', 'XXL']

  return (
    <div className='shopMen'>
      <div className='shopMen-image'>
        <img
          src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Grid_On-Body_Puffer_Natural_Black_Male_01_ae451a39-6665-44e3-800f-72be1dfb9229.png?v=1603047627'
          alt=''
        />
      </div>
      <div className='shopMen-image'>
        <img
          src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/PDP_Lifestyle_Puffer_Men_ac8d7b51-c146-4216-b2ff-97e425cadcdd.png?v=1603047627'
          alt=''
        />
      </div>
      <div className='shopMen-info'>
        <h3>Men's Trino™ Puffer</h3>
        <p>$250</p>
        <h5>
          CLASSICS: <span>Charcoal</span>
        </h5>
        <div className='shopMen-colors'>
          <div className='ball ball1'></div>
          <div className='ball ball2'></div>
        </div>
        <h5>Select Size:</h5>
        <div className='shopMen-size'>
          {SizeArr.map((size, index) => {
            return (
              <button
                key={index}
                className='size'
                onClick={() => setSizeButtonActive(true)}
              >
                {size}
              </button>
            )
          })}
        </div>
        <button
          className={SizeButtonActive ? 'size-btn active' : 'size-btn'}
          onClick={SizeButtonActive && AddItemToCard}
        >
          {SizeButtonActive ? 'Add To Card' : 'Select Size'}
        </button>
      </div>
    </div>
  )
}

export default ShopMen
