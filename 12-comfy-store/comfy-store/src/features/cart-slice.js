import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  ordertotal: 0,
}
const tax = 0.07
const getLocalStorageCart = () =>
  JSON.parse(localStorage.getItem('cart')) || initialState

const cartSlice = createSlice({
  name: 'cart',
  initialState: getLocalStorageCart(),
  reducers: {
    addItem: (state, { payload }) => {
      const { product } = payload
      const item = state.cartItems.find((i) => i.cartId === product.cartId)
      if (item) item.amount += product.amount
      else state.cartItems.push(product)
      state.numItemsInCart += product.amount
      state.cartTotal += product.price * product.amount

      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Item added to cart')
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(initialState))
      return initialState
    },
    removeItem: (state, { payload }) => {
      const { cartId } = payload
      const product = state.cartItems.find((item) => item.cartId === cartId)
      state.cartItems = state.cartItems.filter((item) => item.cartId !== cartId)
      state.numItemsInCart -= product.amount
      state.cartTotal -= product.price * product.amount
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Item succesfully removed from cart')
    },
    editItem: (state, { payload }) => {
      const { cartId, amount } = payload
      const product = state.cartItems.find((item) => item.cartId === cartId)
      state.numItemsInCart += amount - product.amount
      state.cartTotal += product.price * (amount - product.amount)
      product.amount = amount
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Cart succesfully updated')
    },
    calculateTotals: (state) => {
      state.tax = tax * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer
