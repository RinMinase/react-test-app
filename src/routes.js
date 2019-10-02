import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./index";

export default function Routes() {
	return(
		<Router history={createBrowserHistory()}>
			<Route exact path="/" component={App}></Route>
		</Router>
	)
}
