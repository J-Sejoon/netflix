//미들웨어 부분 toolkit

import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const APIkey = process.env.REACT_APP_APIKEY;
//받아온 키 값을 노출되지 않게 만든다 -> 루트에 .env 파일
//미들웨어는 함수가 함수를 리턴

//영화 데이터 가져오기
function getMovies() {
	return async (dispatch) => {
		try {
			dispatch(movieActions.getMoviesRequest()); //로딩전 던져줌

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

			//데이터 도착후
			dispatch(
				movieActions.getMainMovies({
					popularMovies: popularMovies.data,
					topRatedMovies: topRatedMovies.data,
					upcomingMovies: upcomingMovies.data,
					genreList: genreList.data.genres,
				}),
			);
		} catch (error) {
			//에러 핸들링
			dispatch(movieActions.getMoviesFailure());
		}
	};
}

//디테일 데이터 가져오기
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
