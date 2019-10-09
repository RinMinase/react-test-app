import React, { Component, lazy } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';

import store from './reducers';
import Routes from "./routes";
import Navbar from "./core/navbar";

import "./global.scss";

export default class App extends Component {

	constructor(props) { super(props); }

	render () {
		return(
			<div>
				<Navbar />
				<div className="container">
					<Container routes={this.props.routes} />
				</div>
			</div>
		);
	}
}

function Container(props) {
	return props.routes.map((route) => <DynamicRoute key={route.path} { ...route }/>);
}

function DynamicRoute(route) {
	if (!route.path && !route.component) return null;

	const Component = lazy(() => import(`${route.component}/`));

	return(<Route path={route.path} component={Component} />);
}

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('app')
);
