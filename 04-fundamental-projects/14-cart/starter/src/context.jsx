import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  INCREASE_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM,
  CLEAR_CART,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'
import cartItems from './data'
import reducer from './reducer'
import { getTotals } from './utils'
const url = 'https://www.course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: new Map(),
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { totalAmount, totalCost } = getTotals(state.cart)
  const clearCart = () => dispatch({ type: CLEAR_CART })
  const remove = (id) => dispatch({ type: REMOVE_ITEM, payload: { id } })
  const increase = (id) => dispatch({ type: INCREASE_ITEM, payload: { id } })
  const decrease = (id) => dispatch({ type: DECREASE_ITEM, payload: { id } })
  const fetcData = async () => {
    dispatch({type: LOADING})
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({type: DISPLAY_ITEMS, payload: {cart}})
  }
  useEffect(() => {
    fetcData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        increase,
        decrease,
        remove,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
