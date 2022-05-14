import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'order',
    initialState: {
        shippingAddress: 0,
        order: {}
    },
    reducers: {
        setShippingAddress: (state, { payload }) => {
            state.shippingAddress = payload
        },
        setOrder: (state, { payload }) => {
            state.order = payload
        }
    }
})

export const { setShippingAddress, setOrder } = cartSlice.actions;

export default cartSlice.reducer;