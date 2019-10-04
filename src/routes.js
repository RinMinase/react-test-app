import React, { Suspense, lazy } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './';

const routes = [{
	path: "/home",
	component: "./home",
}, {
	path: "/login",
	component: "./login",
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
	if (!route.path && !route.component) return null;

	const Component = lazy(() => import(`${route.component}/`))

	return(<Route path={route.path} component={Component} />);
}
