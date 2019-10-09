import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddlware from 'redux-thunk';

import home from "./home/reducers"

// const middlewares = [thunkMiddlware];
// const enhancers = [applyMiddleware(...middlewares)];
// const composedEnhancers = composeWithDevTools(...enhancers);

const reducers = combineReducers({
	home,
});

// const store = createStore(reducers, applyMiddleware(...middlewares));
const store = createStore(reducers);

export default store;
