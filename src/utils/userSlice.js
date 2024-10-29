// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setSignIndetails: (state, action) => {
            return action.payload; // Set user details
        },
        setSignOut: () => {
            return null; // Reset user details
        }
    }
});

// Export actions and reducer
export const { setSignIndetails, setSignOut } = userSlice.actions;
export default userSlice.reducer; // Default export
