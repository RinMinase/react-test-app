import { default as React, useEffect } from "react";
import { useDispatch } from "react-redux";

import style from "./index.scss";
import { getGithubInfo } from "./actions";

export default function Home() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getGithubInfo());
	}, []);

	return(
		<div>
			<p className={style.test}>Home Component loaded!</p>
			<div className="spinner round"></div>
		</div>
	);
}
