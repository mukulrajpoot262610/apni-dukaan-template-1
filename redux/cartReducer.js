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
                return ({ product: e.product.salePrice, qty: e.qty })
            }).map(e => +e.product * +e.qty).reduce((a, b) => a + b)
        },
        deleteProductData: (state, { payload }) => {
            const updatedProductData = state.products.filter((e) => e.id !== payload);
            state.products = updatedProductData;
            state.quantity = state.products.map((e) => e.qty).reduce((a, b) => a + b)
            state.total = state.products.map((e) => {
                return ({ product: e.product.salePrice, qty: e.qty })
            }).map(e => +e.product * +e.qty).reduce((a, b) => a + b)
        }
    }
})

export const { addProductData, deleteProductData } = cartSlice.actions;

export default cartSlice.reducer;