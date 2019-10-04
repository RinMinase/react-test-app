import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import css from "./index.scss";
import Navbar from "./core/navbar";
import Routes from "./routes";

export default class App extends Component {
	render () {
		return(
			<div>
				<Navbar />
				<div className="container">
					<p className={css.test}>Hello World!</p>
					<ul>
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/login">Login</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Routes />, document.getElementById('app'));
