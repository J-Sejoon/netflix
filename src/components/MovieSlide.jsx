//react multi carousel 슬라이더 컴포넌트
//https://www.npmjs.com/package/react-multi-carousel

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 1400 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 1400, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const MovieSlide = ({ movie }) => {
	console.log("받아온 movie는?", movie);
	return (
		<div>
			<Carousel responsive={responsive}>
				{movie.results.map((item) => (
					<div className="card-wrap" key={item.id}>
						<MovieCard item={item} />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default MovieSlide;
