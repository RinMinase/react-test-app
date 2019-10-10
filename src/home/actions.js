import axios from "axios";

import { GITHUB_INFO } from "./types";

export function getGithubInfo() {
	return (dispatch) => {
		axios.get("https://api.github.com/users/torvalds")
			.then((response) => {
				dispatch(getInfo(response));
			})
	}
}

function getInfo(data) {
	return {
		type: GITHUB_INFO,
		payload: data
	}
}




