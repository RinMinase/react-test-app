import axios from "axios";

import { GITHUB_INFO } from "./types";

export function getGithubInfo() {
	return (dispatch) => {
		axios.get("https://api.github.com/users/torvalds")
			.then((response) => {
				dispatch({ type: GITHUB_INFO, payload: response });
			})
	}
}
