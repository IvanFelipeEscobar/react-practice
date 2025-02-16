import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from './features/cart-slice'
import modalReducer from './features/modal-slice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
})