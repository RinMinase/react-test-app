import { types } from "./actions";

const initialState = {
	githubInfo: {},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.GITHUB_INFO:
			return { ...state, githubInfo: action.payload }
		default:
			return state;
	}
}
