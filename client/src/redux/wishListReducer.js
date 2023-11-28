import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            console.log(action.payload);
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if (!item) {
                state.products.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeItem } = wishListSlice.actions;

export default wishListSlice.reducer;
