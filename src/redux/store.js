// toolkit 사용
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";

const store = configureStore({
	reducer: { movie: movieReducer },
});

export default store;
