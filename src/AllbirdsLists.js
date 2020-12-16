import React from 'react'
import './allbirdsLists.css'
import { Link } from 'react-router-dom'
import {
  allbirdsShoesData,
  allbirdsApparelData,
  allbirdsAccessoriesData,
} from './allbirdsListData'
import { useGlobalContext } from './context'

const AllbirdsLists = () => {
  const { isAllbirdsListsOpen, toggleAllbirdsLists } = useGlobalContext()

  return (
    <div
      className={isAllbirdsListsOpen ? 'allbirdsLists show' : 'allbirdsLists'}
    >
      <div className='allbirdsLists-container'>
        <div className='allbirdsLists-links'>
          <h3>SHOES</h3>
          <ul>
            {allbirdsShoesData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to='#'>{item}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='allbirdsLists-links'>
          <h3>APPAREL</h3>
          <ul>
            {allbirdsApparelData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to='#'>{item}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='allbirdsLists-links'>
          <h3>SHOES</h3>
          <ul>
            {allbirdsAccessoriesData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to='#'>{item}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='allbirdsLists-links'>
          <h3>COLLECTIONS</h3>
          <img
            src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/3H929xd3odszzvqQEqRVaH/1'
            alt=''
          />
          <img
            src='https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_530,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/7pJxErIwQpFporfJGy8Rve/1'
            alt=''
          />
        </div>
      </div>
      <div
        className='allbirdsLists-overley'
        onClick={toggleAllbirdsLists}
      ></div>
    </div>
  )
}

export default AllbirdsLists
