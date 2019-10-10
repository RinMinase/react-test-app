import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import home from "./home/reducers"

const reducers = combineReducers({
	home,
});

function thunk() {
	return ({ dispatch, getState }) => (next) => (action) =>
		(typeof action === 'function') ? action(dispatch, getState) : next(action);
}

const middleware = [thunk()];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
