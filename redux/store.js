import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer.js'
import detailsReducer from './detailsReducer.js'


export default configureStore({
    reducer: {
        cart: cartReducer,
        details: detailsReducer,
    }
})