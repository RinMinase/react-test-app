import React, { Suspense } from "react";
import { Router } from "react-router-dom";
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
				<App routes={routes} />
			</Suspense>
		</Router>
	)
}
