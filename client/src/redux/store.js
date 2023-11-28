import cartReducer from "./cartReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import wishListReducer from "./wishListReducer";

const cartPersistConfig = {
    key: "cart",
    version: 1,
    storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const wishListPersistConfig = {
    key: "wishList",
    version: 1,
    storage,
};

const persistedWishListReducer = persistReducer(
    wishListPersistConfig,
    wishListReducer
);

const rootReducer = combineReducers({
    cart: persistedCartReducer,
    wishList: persistedWishListReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export let persistor = persistStore(store);
