import React, { Suspense } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './';
import Home from './home';
import Login from './login';

const routes = [{
	path: "/home",
	component: Home,
}, {
	path: "/login",
	component: Login,
}];


export default function Routes() {
	return(
		<Router history={createBrowserHistory()}>
			<Suspense fallback={<div>Loading...</div>}>
				<App />
				{ routes.map((route) => <DynamicRoute key={route.path} { ...route }/>) }
			</Suspense>
		</Router>
	)
}

const DynamicRoute = (route) => {
	console.log(route);
	return(
		<Route path={route.path} component={ route.component } />
	);
}
