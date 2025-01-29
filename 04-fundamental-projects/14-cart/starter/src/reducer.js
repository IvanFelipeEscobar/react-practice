import {
  INCREASE_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM,
  CLEAR_CART,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() }

    case REMOVE_ITEM:
      const newCart = new Map(state.cart)
      newCart.delete(action.payload.id)
      return { ...state, cart: newCart }

    case INCREASE_ITEM:
      const increasedCart = new Map(state.cart)
      const increasedItem = increasedCart.get(action.payload.id)
      const setIncreasedItem = {
        ...increasedItem,
        amount: increasedItem.amount + 1,
      }
      const newIncreasedItem = increasedCart.set(
        action.payload.id,
        setIncreasedItem
      )
      return { ...state, cart: newIncreasedItem }

    case DECREASE_ITEM:
      const decreasedCart = new Map(state.cart)
      const decreasedItem = decreasedCart.get(action.payload.id)
      if (decreasedItem.amount === 1) {
        decreasedCart.delete(action.payload.id)
        return { ...state, cart: decreasedCart }
      }
      const setDecreasedItem = {
        ...decreasedItem,
        amount: decreasedItem.amount - 1,
      }
      const newDecreasedItem = decreasedCart.set(
        action.payload.id,
        setDecreasedItem
      )
      return { ...state, cart: newDecreasedItem }
    case LOADING:
      return { ...state, loading: true }
    case DISPLAY_ITEMS:
      const displayCart = new Map(action.payload.cart.map(item => [item.id, item]))
      return {...state, loading: false, cart: displayCart}
    default:
      throw new Error(`no matching action type: ${action.type}`)
  }
}

export default reducer
