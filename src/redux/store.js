import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../redux/movieSlice";
export default configureStore({
  reducer: {
    movie: movieReducer,
  },
});
