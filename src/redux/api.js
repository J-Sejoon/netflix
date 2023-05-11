import axios from "axios";


const api = axios.create({
	baseURL: "https://api.themoviedb.org/3", 
	headers: { "Content-type": "application/json" }, 
});


api.interceptors.request.use(
	function (config) {
		console.log("request 시작", config);
		return config;
	},
	function (error) {
		console.log("에러확인", error);
		return Promise.reject(error);
	},
);


api.interceptors.response.use(
	function (response) {
		console.log("response 확인", response);
		return response;
	},
	function (error) {
		console.log("response 에러확인", error);
		return Promise.reject(error);
	},
);

export default api;
