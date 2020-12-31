import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './buyShoes.css'
import { ShoesImgs } from '../components/ShopData'
import { useGlobalContext } from '../context'

const BuyShoes = () => {
  const { id } = useParams()
  const { AddItemToCard } = useGlobalContext()
  const [image, setImage] = useState('')
  const [Title, setTitle] = useState('')
  const [SizeButtonActive, setSizeButtonActive] = useState(false)

  const numbers = [8, 9, 10, 11, 12, 13, 14]

  useEffect(() => {
    ShoesImgs.map((item) => {
      if (item.id === id) {
        setImage(item.img)
        setTitle(item.title)
      }
      return item
    })
  }, [id])
  return (
    <div className='buyShoes'>
      <div className='buyShoes-img'>
        <img src={image} alt='' />
      </div>
      <div className='buyShoes-info'>
        <h3>{Title}</h3>
        <p>$135</p>
        <h5>
          Classics: <span>Tuke jo (Cream Sole)</span>
        </h5>
        <div className='buyShoes-colors'>
          <div className='ball ball1'></div>
          <div className='ball ball2'></div>
          <div className='ball ball3'></div>
        </div>
        <h5>Select Size:</h5>
        <div className='buyShoes-size'>
          {numbers.map((num, index) => {
            return (
              <button
                key={index}
                className='size'
                onClick={() => setSizeButtonActive(true)}
              >
                {num}
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

export default BuyShoes
