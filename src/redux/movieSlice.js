import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: [],
    user: null,
  },
  reducers: {
    allMovie: (state, action) => {
      state.movie = action.payload;
    },

    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { allMovie, login , logout } = movieSlice.actions;
export const movieSelector = (state) => state.movie.movie;
export const userSelector = (state) => state.movie.user;
export default movieSlice.reducer;
