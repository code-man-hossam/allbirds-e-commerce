import React from 'react'
import './accounts.css'

const SignUp = () => {
  return (
    <section className='sign-section'>
      <div className='login'>
        <h2>Login</h2>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' className='email' />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>password</label>
            <input type='password' id='password' className='password' />
          </div>
          <button type='submit'>sign in</button>
          <a href='https://forget/password'>forget password</a>
        </form>
      </div>
      <div className='sign'>
        <div className='head'>
          <h2>create an account</h2>
          <p>We never save credit card information.</p>
          <p>
            Registering makes checkout fast and easy and saves your order
            information in your account.
          </p>
        </div>
        <form className='form-sign'>
          <div className='form-control'>
            <label htmlFor='firstName'>first name</label>
            <input type='text' id='firstName' className='email' />
          </div>
          <div className='form-control'>
            <label htmlFor='lastName'>last name</label>
            <input type='text' id='lastName' className='email' />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>email</label>
            <input type='email' id='email' className='email' />
          </div>
          <div className='form-control'>
            <label htmlFor='password'>password</label>
            <input type='password' id='password' className='password' />
          </div>
          <button type='submit'>register</button>
          <a href='https://forget/password'>
            By creating an account, you agree to our Terms of Use and Privacy
            Policy.
          </a>
        </form>
      </div>
    </section>
  )
}

export default SignUp
