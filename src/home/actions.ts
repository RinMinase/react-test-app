import axios from "axios";

export function getGithubInfo() {
	return (dispatch) => {
		axios.get("https://api.github.com/users/torvalds")
			.then((response) => {
				dispatch({ type: types.GITHUB_INFO, payload: response });
			});
	};
}

export const types = {
	GITHUB_INFO: "GITHUB_INFO",
};
