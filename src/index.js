import React from "react";
import ReactDOM from "react-dom";

import css from "./index.scss";
import Routes from "./routes";

export default class App extends React.Component {
	render () {
		return(
			<div className={css.test}>Hello World!</div>
		);
	}
}

ReactDOM.render(<Routes />, document.getElementById('app'));
