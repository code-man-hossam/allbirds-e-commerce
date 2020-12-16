import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Navlinks from './Navlinks'
import ShoppingCart from './ShoppingCart'
import Footer from './Footer'
import AllbirdsLists from './AllbirdsLists'
import Kids from './pages/Kids'
import Accounts from './pages/Accounts'
import Materials from './pages/Materials'
import BuyShoes from './pages/BuyShoes'
import ShopMen from './pages/ShopMen'
import ShopWomen from './pages/ShoWomen'
import GiftsMen from './pages/GiftsMen'
import GiftsWomen from './pages/GiftsWomen'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Navlinks />
        <ShoppingCart />
        <AllbirdsLists />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/kids'>
            <Kids />
          </Route>
          <Route path='/accounts'>
            <Accounts />
          </Route>
          <Route path='/materials'>
            <Materials />
          </Route>
          <Route path='/shop-shoes/:id'>
            <BuyShoes />
          </Route>
          <Route path='/shop-men'>
            <ShopMen />
          </Route>
          <Route path='/shop-women'>
            <ShopWomen />
          </Route>
          <Route path='/gifts-men'>
            <GiftsMen />
          </Route>
          <Route path='/gifts-women'>
            <GiftsWomen />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
