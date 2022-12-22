//여러 리듀서를 하나로 모아주는 곳
//combineReducers에는 항상 객체가 들어감
import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

export default combineReducers({ movie: movieReducer });
