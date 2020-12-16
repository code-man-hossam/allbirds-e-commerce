import React from 'react'
import './kids.css'

const GiftsWomen = () => {
  return (
    <section className='kids'>
      <div className='kids-hero'>
        <div className='hero-img'>
          <img
            src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_2600,f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/4kUfBTEkXuO41KF6URpKrT/6dd9b82c8780f3acac6bcfe303b1802b/Collection-page-w1300_694px_V2.jpg'
            alt=''
          />
        </div>
        <div className='hero-info'>
          <h1>Gifts For Her</h1>
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
              src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3G5Rrcf9yYaIZNHWDlJoWH/1'
              alt=''
            />
          </div>
          <h3>Womens Wool Cardi</h3>
          <p>Natural White</p>
          <br />
          <p>$145</p>
        </div>
        <div className='kids-col'>
          <div className='kids-col-img'>
            <img
              src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/1pkuLls9myj8KdEJDmaeqm/1'
              alt=''
            />
          </div>
          <h3>Womens Wool Jumper</h3>
          <p>Natural Grey</p>
          <br />
          <p>$145</p>
        </div>
      </div>
    </section>
  )
}

export default GiftsWomen
