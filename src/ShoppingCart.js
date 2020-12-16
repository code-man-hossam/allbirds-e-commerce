import React from 'react'
import './shoppingCart.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { useGlobalContext } from './context'
import sheep from './sheep.png'

const ShoppingCart = () => {
  const {
    isShoppingCartOpen,
    closeShoppingCart,
    total,
    clearCard,
    increase,
    decrease,
  } = useGlobalContext()

  return (
    <div className={isShoppingCartOpen ? 'shoppingCart show' : 'shoppingCart'}>
      <section>
        <div className='cart'>
          <button className='closeBtn' onClick={closeShoppingCart}>
            <ArrowForwardIcon />
          </button>
          <button>
            <AddShoppingCartIcon />
          </button>
          <h3>{total}</h3>
          {total > 0 ? (
            <p>Congrats! You get free standard shipping.</p>
          ) : (
            <p>You're $50 away from free shipping!</p>
          )}
        </div>
        {total > 0 && (
          <div className='cart-item'>
            <div className='cart-item-img'>
              <img src={sheep} alt='' />
            </div>
            <div className='cart-item-desc'>
              <h5>All Your Favorite Friendly Plante Materials</h5>
              <p>Classics: Tuke jo (Cream Sole)</p>
              <div className='cart-item-desc-btns'>
                <button className='increase' onClick={decrease}>
                  -
                </button>
                <button>{total}</button>
                <button className='increase' onClick={increase}>
                  +
                </button>
              </div>
            </div>
            <div className='cart-item-close'>
              <button onClick={clearCard}>x</button>
              <p>$135</p>
            </div>
          </div>
        )}
        <div className='shop-btns'>
          {total === 0 && <h3>Your Cart Is Empty</h3>}
          <button>SHOP MEN'S</button>
          <button>SHOP WOMEN'S</button>
          <button>SHOP SOCKS</button>
          <button>SHOP LACES</button>
          <button>SHOP INSOLES</button>
        </div>
      </section>
      <div className='overlay' onClick={closeShoppingCart}></div>
    </div>
  )
}

export default ShoppingCart
