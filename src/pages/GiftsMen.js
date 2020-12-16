import React from 'react'
import './kids.css'

const GiftsMen = () => {
  return (
    <section className='kids'>
      <div className='kids-hero'>
        <div className='hero-img'>
          <img
            src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_2600,f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/5AiAc7StI9YDfw8vJwzeCO/b523977adeaeee13e764cc3bb1302a46/Collection_page_w1300_694px.jpg'
            alt=''
          />
        </div>
        <div className='hero-info'>
          <h1>Gifts For Him</h1>
          <p>
            Whether they like to sit back and relax or get up and go, we’ve got
            the perfect planet-friendly gifts for everyone on your list. Or just
            grab a gift card. That works, too.
          </p>
        </div>
      </div>
      <div className='kids-shop'>
        <div className='kids-col'>
          <div className='kids-col-img'>
            <img
              src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1TPeB1fqR7iwYgewXpKi6i/1'
              alt=''
            />
          </div>
          <h3>Mens Wool Cardi</h3>
          <p>Charcoal</p>
          <br />
          <p>$145</p>
        </div>
        <div className='kids-col'>
          <div className='kids-col-img'>
            <img
              src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1cyj6y3fXJZvcjeQsjCa1g/1'
              alt=''
            />
          </div>
          <h3>Mens Wool Jumper</h3>
          <p>Natural Grey</p>
          <br />
          <p>$145</p>
        </div>
      </div>
    </section>
  )
}

export default GiftsMen
