import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer.js'
import detailsReducer from './detailsReducer.js'
import authReducer from './authReducer'
import orderSlice from './orderSlice.js'


export default configureStore({
    reducer: {
        cart: cartReducer,
        details: detailsReducer,
        auth: authReducer,
        order: orderSlice
    }
})