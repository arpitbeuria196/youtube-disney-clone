// appStore.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './movieSlice'

const store = configureStore({
    reducer: {
        user: userReducer, // Your user reducer
        movie:movieReducer,
    },
});

export default store;
