const actionTypes = {
	RESET_STORE: "RESET_STORE"
};

export class ResetStore {
	type = actionTypes.RESET_STORE;
}

export function reset(reducer, initialState) {
	return (state, action) => {
		if (action.type === actionTypes.RESET_STORE) {
			return initialState;
		}
		if (!initialState) {
			initialState = reducer(state, action);
			return initialState;
		}
		return reducer(state, action);
	};
}
