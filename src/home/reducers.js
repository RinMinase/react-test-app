import { GITHUB_INFO } from "./types";

const initialState = {
	githubInfo: {},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case GITHUB_INFO:
			return {
				...state,
				githubInfo: action.payload,
			}

		default:
			return state;
	}
}
