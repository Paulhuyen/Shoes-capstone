import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import registerReducer from './reducers/registerReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
    reducer: {
        productReducer:productReducer,
        userReducer:userReducer,
        registerReducer:registerReducer,
        cartReducer:cartReducer
    }
});