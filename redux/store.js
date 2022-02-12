import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer.js'


export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})