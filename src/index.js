import React from "react";
import ReactDOM from "react-dom";
import css from "./index.scss";

class App extends React.Component {
	render () {
		return(
			<div className={css.test}>Hello World!</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
