import React from 'react'
import Banner from './components/Banner'
import Category from './components/Category'
import Favorite from './components/Favorite'
import SeeHow from './components/SeeHow'
import Shoes from './components/Shoes'
import Stories from './components/Stories'

const Home = () => {
  return (
    <>
      <Banner />
      <Favorite />
      <SeeHow />
      <Category />
      <Shoes />
      <Stories />
    </>
  )
}

export default Home
