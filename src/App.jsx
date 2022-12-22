import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/movies" element={<Movies />}></Route>
				<Route path="/movies/:id" element={<MovieDetail />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
