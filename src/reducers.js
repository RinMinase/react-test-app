import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import home from "./home/reducers"

const reducers = combineReducers({
	home,
});

const middleware = [thunkMiddlware];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
