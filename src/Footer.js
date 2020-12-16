import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import PinterestIcon from '@material-ui/icons/Pinterest'
import { Countries } from './data'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer-email'>
        <label htmlFor='email'>Enter your email to stay in touch!</label>
        <input type='email' id='email' />
        <button>Sign Up</button>
      </div>
      <div className='footer-lists'>
        <div className='list'>
          <h3>HELP</h3>
          <ul>
            <li>1-888-963-8944</li>
            <li>1-814-251-9966 (Text)</li>
            <li>help@allbirds.com</li>
            <li>Returns/Exchanges</li>
            <li>FAQ/Contact us</li>
          </ul>
        </div>
        <div className='list'>
          <h3>SHOP</h3>
          <ul>
            <li>men's shoes</li>
            <li>women's shoes</li>
            <li>men's apparel</li>
            <li>women's apparel</li>
            <li>socks</li>
            <li>gift cards</li>
            <li>download the allbirds app</li>
          </ul>
        </div>
        <div className='list'>
          <h3>COMPANY</h3>
          <ul>
            <li>our stores</li>
            <li>our story</li>
            <li>our metarilas</li>
            <li>sustainabilty</li>
            <li>partnership</li>
            <li>affiliats</li>
            <li>bulk orders</li>
            <li>carrers</li>
            <li>press</li>
            <li>California Transparency Act</li>
          </ul>
        </div>
      </div>
      <div className='footer-locations'>
        <div className='socials'>
          <h3>FOLLOW THE FLOCK</h3>
          <p>
            Exclusive offers, a heads up on new things, and sightings of
            Allbirds in the wild. Oh, we have cute sheep, too. #weareallbirds
          </p>
          <Link to='#'>
            <InstagramIcon />
          </Link>
          <Link to='#'>
            <TwitterIcon />
          </Link>
          <Link to='#'>
            <FacebookIcon />
          </Link>
          <Link to='#'>
            <PinterestIcon />
          </Link>
        </div>
        <div className='socials'>
          <img
            src='https://cdn.allbirds.com/image/upload/q_auto/v1/production/footer/en-US/images/1X4EOQF1JJOjMbo48vDUzB/1'
            alt=''
          />
        </div>
        <div className='countries'>
          {Countries.map((item) => {
            const { id, image } = item

            return <img src={image} key={id} alt='' />
          })}
        </div>
      </div>
      <p className='copy'>
        © 2020 Allbirds, Inc. All Rights Reserved. Terms, Privacy &
        Accessibility
      </p>
    </section>
  )
}

export default Footer
