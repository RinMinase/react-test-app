import React, { Component } from "react";

import style from "./style.scss";

export default class Home extends Component {
	render () {
		return(
			<div>
				<p className={style.test}>Home Component loaded!</p>
				<div className="spinner round"></div>
			</div>
		);
	}
}
