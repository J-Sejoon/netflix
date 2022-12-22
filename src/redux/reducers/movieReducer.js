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

//createSlice - 리듀서를 만들어줌, 객체를 매개변수로, 3개 필요(name,initialState,reducers)
const movieSlice = createSlice({
	name: "movie", //액션 네임을 만들어줌
	initialState,
	reducers: {
		//기존에 if elseif, switch역할, 함수(2개의 매개변수를 받음)
		//로딩시작
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
