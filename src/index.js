import React, { Component, lazy } from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";

import Navbar from "./core/navbar";
import Routes from "./routes";

import "./index.scss";

export default class App extends Component {

	constructor(props) { super(props); }

	render () {
		return(
			<div>
				<Navbar />
				<div className="container">
					<p>Hello World!</p>
					<div className="spinner round"></div>
					<ul>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/login">Login</Link></li>
					</ul>
				</div>
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

ReactDOM.render(<Routes />, document.getElementById('app'));
