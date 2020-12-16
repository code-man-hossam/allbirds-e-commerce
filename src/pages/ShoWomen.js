import React, { useState } from 'react'
import './shopMen.css'
import { useGlobalContext } from '../context'

const ShopWomen = () => {
  const { AddItemToCard } = useGlobalContext()
  const [SizeButtonActive, setSizeButtonActive] = useState(false)
  const SizeArr = ['S', 'M', 'L', 'XL', 'XXL']

  return (
    <div className='shopMen'>
      <div className='shopMen-image'>
        <img
          src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Grid_On-_Body_TrinoXO_Tee_Natural_Grey_Female.png?v=1603408892'
          alt=''
        />
      </div>
      <div className='shopMen-image'>
        <img
          src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/PDP_Lifestyle_Tee_Women_8099bc35-b47a-4185-bcdf-e4ef35b9384b.png?v=1603408893'
          alt=''
        />
      </div>
      <div className='shopMen-info'>
        <h3>Women's TrinoXO™ Tee</h3>
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

export default ShopWomen
