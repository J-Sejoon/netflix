//api를 불러오기 위한 세팅
//로딩 스피너 사용 추가

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/action/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import MoonLoader from "react-spinners/MoonLoader";

const Home = () => {
	const dispatch = useDispatch();
	//켜지자 마자 데이타가 불러와져야 함,리덕스미들웨어 이용

	const { popularMovies, topRatedMovies, upcomingMovies, loading } =
		useSelector((state) => state.movie); //store에서 가져옴, loading상태도 추가
	//console.log("현재 home,popularMovies가 잘 불러와졌니? ", popularMovies);

	useEffect(() => {
		dispatch(movieAction.getMovies());
	}, []);

	//로딩 true - 데이타 도착 전 -> 로딩스피너 보여줌
	//로딩 false - 데이타 도착 후, 에러 -> 데이타 보여줌, 에러메세지

	if (loading) {
		return (
			<div className="loader-container">
				<MoonLoader color="white" loading={loading} size={150} />
			</div>
		);
	}

	return (
		<div>
			{popularMovies.results && <Banner movie={popularMovies.results[0]} />}

			<div className="slide-container">
				<h2>Popular Movie</h2>
				<MovieSlide movie={popularMovies} />
				<h2>Top Rated Movie</h2>
				<MovieSlide movie={topRatedMovies} />
				<h2>Upcoming Movie</h2>
				<MovieSlide movie={upcomingMovies} />
			</div>
		</div>
	);
};
//조건부 렌더링을 걸지 않으면 데이타를 받아 오기 전엔 에러

export default Home;
