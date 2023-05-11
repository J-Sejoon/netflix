import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const APIkey = process.env.REACT_APP_APIKEY;

function getMovies() {
	return async (dispatch) => {
		try {
			dispatch(movieActions.getMoviesRequest()); 

			const popularMovieApi = api.get(
				`/movie/popular?api_key=${APIkey}&language=en-US&page=1`,
			);
			const topRatedMovieApi = api.get(
				`/movie/top_rated?api_key=${APIkey}&language=en-US&page=1`,
			);
			const upcomingMovieApi = api.get(
				`/movie/upcoming?api_key=${APIkey}&language=en-US&page=1`,
			);
			const genreApi = api.get(
				`/genre/movie/list?api_key=${APIkey}&language=en-US`,
			);

			let [popularMovies, topRatedMovies, upcomingMovies, genreList] =
				await Promise.all([
					popularMovieApi,
					topRatedMovieApi,
					upcomingMovieApi,
					genreApi,
				]);

			dispatch(
				movieActions.getMainMovies({
					popularMovies: popularMovies.data,
					topRatedMovies: topRatedMovies.data,
					upcomingMovies: upcomingMovies.data,
					genreList: genreList.data.genres,
				}),
			);
		} catch (error) {
			dispatch(movieActions.getMoviesFailure());
		}
	};
}

function getMoviesDetail(id) {
	return async (dispatch) => {
		try {
			dispatch(movieActions.getMoviesRequest());

			const detailMovieApi = api.get(
				`/movie/${id}?api_key=${APIkey}&language=en-US`,
			);
			const trailerVideoApi = api.get(
				`/movie/${id}/videos?api_key=${APIkey}&language=en-US`,
			);

			let [detailMovies, trailerVideo] = await Promise.all([
				detailMovieApi,
				trailerVideoApi,
			]);
			console.log("trailerVideo의 data는?  ", trailerVideo);
			dispatch(
				movieActions.getDetailMovies({
					detailMovies: detailMovies.data,
					trailerVideo: trailerVideo.data,
				}),
			);
		} catch (error) {
			dispatch(movieActions.getMoviesFailure());
		}
	};
}

export const movieAction = { getMovies, getMoviesDetail };
