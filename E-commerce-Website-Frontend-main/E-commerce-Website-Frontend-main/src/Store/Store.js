import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice.js'
import WishlistReducer from '../Store/WishlistSlice.js'
import UserReducer from "./UserSlice.js";

const Store = configureStore({
    reducer: {
        cart: CartReducer,
        wishlist: WishlistReducer,
        user: UserReducer
    },
});

export default Store


