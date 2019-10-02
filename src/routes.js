import React, { Suspense, lazy } from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const App = lazy(() => import('./index'));
const Home = lazy(() => import('./home'));
const Login = lazy(() => import('./login'));

export default function Routes() {
	return(
		<Router history={createBrowserHistory()}>
			<Suspense fallback={<div>Loading...</div>}>
				<div>
					<ul>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/login">Login</Link></li>
					</ul>
				</div>
				<App />
				<Route exact path="/home" component={Home} />
				<Route exact path="/login" component={Login} />
			</Suspense>
		</Router>
	)
}
