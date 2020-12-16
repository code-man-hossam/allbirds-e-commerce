import React from 'react'
import './stories.css'
import { storiesData } from './storiesData'

const Stories = () => {
  return (
    <div className='stories'>
      <h1>Stories</h1>
      <div className='story-container'>
        {storiesData.map((item) => {
          const { id, img, title, info } = item

          return (
            <div className='story-col' key={id}>
              <div className='story-colImg'>
                <img src={img} alt='' />
              </div>
              <h3>{title}</h3>
              <p>{info}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Stories
