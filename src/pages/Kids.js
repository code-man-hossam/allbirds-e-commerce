import React from 'react'
import './kids.css'

const Kids = () => {
  return (
    <section className='kids'>
      <div className='kids-hero'>
        <div className='hero-img'>
          <img
            src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_2600,f_auto,q_auto/https://images.ctfassets.net/9uo1qvvet3xa/1AyufIhcKlvPp4DxQnYKCx/639a8470f642faca7cf06693d6bc1f39/smallbirds_web-collection-hero_1300x694.jpg'
            alt=''
          />
        </div>
        <div className='hero-info'>
          <h1>Small Wonders</h1>
          <p>
            Smallbirds are the perfect pair for kiddos age 2 to 4. Machine
            washable. Easy to slip on and off. Oh and they play nice with the
            planet.
          </p>
        </div>
      </div>
      <div className='kids-shop'>
        <div className='kids-col'>
          <div className='kids-col-img'>
            <img
              src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3QCagSNXESXH2Je4uuEYWw/1'
              alt=''
            />
          </div>
          <h3>Smallbirds Wool Runners</h3>
          <p>Savanna Dawn (Cream Sole)</p>
          <br />
          <p>$55</p>
        </div>
        <div className='kids-col'>
          <div className='kids-col-img'>
            <img
              src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/6vRVCiUqtZ4RxEYjYiNGZc/1'
              alt=''
            />
          </div>
          <h3>Smallbirds Wool Runners</h3>
          <p>Savanna Dawn (Cream Sole)</p>
          <br />
          <p>$55</p>
        </div>
      </div>
    </section>
  )
}

export default Kids
