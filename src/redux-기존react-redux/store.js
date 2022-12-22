import { createStore, applyMiddleware } from "redux";
//createStore가로줄 redux toolkit사용 유도를 위해
import rootReducer from "./reducers";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
