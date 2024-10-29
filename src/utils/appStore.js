// appStore.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Make sure the path is correct

const store = configureStore({
    reducer: {
        user: userReducer, // Your user reducer
    },
});

export default store;
