export const RESET_STORE = 'RESET_STPRE';
export class ResetStore {
	type = RESET_STORE;
}

export function resetStore(){
	return {
		type: RESET_STORE
	};
}

export function reset(reducer, initialState) {
	return (state, action) => {
		if (action.type === RESET_STORE) {
			return initialState;
		}
		if (!initialState) {
			initialState = reducer(state, action);
			return initialState;
		}
		return reducer(state, action);
	};
}
