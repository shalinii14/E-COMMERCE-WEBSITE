import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
    },
    reducers: {
        addProductToWishlist(state, action) {
            let currentProduct = action.payload;
            let isProductInWishlist = state.wishlist.find((product) => product.id === currentProduct.id);
            if (isProductInWishlist) {
                return state;
                }else{
                    state.wishlist.push(currentProduct)
                }
            },
        removeProductFromWishlist(state, action) {
            state.wishlist = state.wishlist.filter((product) => product.id !== action.payload);
        },
    },
});

export const {addProductToWishlist , removeProductFromWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;