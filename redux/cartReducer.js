import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProductData: (state, { payload }) => {
            state.products = [payload, ...state.products]
            state.quantity = state.products.map((e) => e.qty).reduce((a, b) => a + b)
            state.total = state.products.map((e) => {
                return ({ product: e.product.discountedPrice, qty: e.qty })
            }).map(e => +e.product * +e.qty).reduce((a, b) => a + b, 0)
        },
        deleteProductData: (state, { payload }) => {
            const updatedProductData = state.products.filter((e) => e.id !== payload);
            state.products = updatedProductData;
            state.quantity = state.products.map((e) => e.qty).reduce((a, b) => a + b, 0)
            state.total = state.products.map((e) => {
                return ({ product: e.product.discountedPrice, qty: e.qty })
            }).map(e => +e.product * +e.qty).reduce((a, b) => a + b, 0)
        }
    }
})

export const { addProductData, deleteProductData } = cartSlice.actions;

export default cartSlice.reducer;