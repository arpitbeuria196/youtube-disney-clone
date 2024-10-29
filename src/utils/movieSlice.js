import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        Recommended: [],
        NewDisneyPlus: [],
        Originals: [],
        Trending: []
    },
    reducers: {
        setRecommendedMovies: (state, action) => {
            state.Recommended = action.payload;  // Replace the array instead of pushing
        },
        setNewDisneyPlusMovies: (state, action) => {
            state.NewDisneyPlus = action.payload;  // Replace the array
        },
        setOriginalsMovies: (state, action) => {
            state.Originals = action.payload;  // Replace the array
        },
        setTrendingMovies: (state, action) => {
            state.Trending = action.payload;  // Replace the array
        }
    }
});

export const { setRecommendedMovies, setNewDisneyPlusMovies, setOriginalsMovies, setTrendingMovies } = movieSlice.actions;

export default movieSlice.reducer;
