import React, { useContext, useReducer, useState } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  total: 0,
}

const AppProvider = ({ children }) => {
  const [state, disbatch] = useReducer(reducer, initialState)

  const [isNavlinksOpen, setIsNavlinksOpen] = useState(false)
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false)
  const [isAllbirdsListsOpen, setIsAllbirdsListsOpen] = useState(false)

  const openShoppingCart = () => {
    setIsShoppingCartOpen(true)
    setIsNavlinksOpen(false)
  }

  const closeShoppingCart = () => {
    setIsShoppingCartOpen(false)
  }

  const openNavlinks = () => {
    setIsNavlinksOpen(!isNavlinksOpen)
  }

  const toggleAllbirdsLists = () => {
    setIsAllbirdsListsOpen(!isAllbirdsListsOpen)
  }

  const AddItemToCard = () => {
    openShoppingCart()
    disbatch({ type: 'ADD_TO_CARD' })
  }

  const clearCard = () => {
    disbatch({ type: 'CLEAR_CARD' })
  }

  const increase = () => {
    disbatch({ type: 'INCREASE' })
  }

  const decrease = () => {
    disbatch({ type: 'DECREASE' })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        isNavlinksOpen,
        isShoppingCartOpen,
        isAllbirdsListsOpen,
        openNavlinks,
        openShoppingCart,
        closeShoppingCart,
        toggleAllbirdsLists,
        AddItemToCard,
        clearCard,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
