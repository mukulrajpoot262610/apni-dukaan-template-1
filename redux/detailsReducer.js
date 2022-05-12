import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
    name: 'details',
    initialState: {
        details: {},
        products: [],
    },
    reducers: {
        setDetails: (state, { payload }) => {
            state.details = payload
        },
        setProducts: (state, { payload }) => {
            state.products = payload
        }
    }
})

export const { setDetails, setProducts } = detailSlice.actions;

export default detailSlice.reducer;