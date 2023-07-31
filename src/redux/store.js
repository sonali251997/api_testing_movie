import { configureStore } from "@reduxjs/toolkit";
import foodReducer from '../screens/food/reducer'
import logger from 'redux-logger';

const store = configureStore({
    reducer:{
        food:foodReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware.concat(logger),
})

export default store;