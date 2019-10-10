import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from './reducers';
import { Routes, DynamicRoute } from "./routes";
import Navbar from "./core/Navbar";

import "./global.scss";

export default function App(props) {
	return(
		<div>
			<Navbar />
			<div className="container">
				<Container routes={props.routes} />
			</div>
		</div>
	);
}

function Container(props) {
	return props.routes.map((route) => <DynamicRoute key={route.path} { ...route }/>);
}

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app')
);
