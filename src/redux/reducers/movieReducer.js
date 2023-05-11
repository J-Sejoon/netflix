//redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
	popularMovies: {},
	topRatedMovies: {},
	upcomingMovies: {},
	loading: true,
	genreList: [],
	detailMovies: {},
	trailerVideo: {},
};

const movieSlice = createSlice({
	name: "movie", //액션 네임을 만들어줌
	initialState,
	reducers: {
		getMoviesRequest(state, action) {
			state.loading = true;
		},
		getMainMovies(state, action) {
			state.popularMovies = action.payload.popularMovies;
			state.topRatedMovies = action.payload.topRatedMovies;
			state.upcomingMovies = action.payload.upcomingMovies;
			state.genreList = action.payload.genreList;
			state.loading = false;
		},
		getMoviesFailure(state, action) {
			state.loading = true;
		},
		getDetailMovies(state, action) {
			state.detailMovies = action.payload.detailMovies;
			state.trailerVideo = action.payload.trailerVideo;
			state.loading = false;
		},
	},
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
