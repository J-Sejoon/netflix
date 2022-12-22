import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/action/movieAction";
import MoonLoader from "react-spinners/MoonLoader";
import MovieExplain from "../components/MovieExplain";

const MovieDetail = () => {
	const { id } = useParams();
	const { detailMovies, loading, trailerVideo } = useSelector(
		(state) => state.movie,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(movieAction.getMoviesDetail(id));
		window.scrollTo(0, 0); //화면 제일 위로 올라간 상태로 열리게
	}, [id]);

	if (loading) {
		return (
			<div className="loader-container">
				<MoonLoader color="white" loading={loading} size={150} />
			</div>
		);
	}
	return (
		<div>
			{console.log("detailMovies는?", detailMovies)}
			<MovieExplain item={detailMovies} videoId={trailerVideo} />
			<br />
			<br />
			<h1>영화 리뷰들 넣을곳!!</h1>
		</div>
	);
};

export default MovieDetail;
