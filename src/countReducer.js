const countReducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + action.payload,
				history: [
					...state.history,
					{ type: 'INCREMENT', number: action.payload, prevCount: state.count },
				],
			}

		case 'DECREMENT':
			return {
				...state,
				count: state.count - action.payload,
				history: [
					...state.history,
					{ type: 'DECREMENT', number: action.payload, prevCount: state.count },
				],
			}

		case 'UNDO':
			// Payload is the last item in the array
			// Count is set to the last action but reverted (increment becomes count minus X)
			// History filters out last item
			// undoHistory is the state that keeps track of the last undo action
			return {
				count: action.payload
					? action.payload.type === 'INCREMENT'
						? state.count - action.payload.number
						: state.count + action.payload.number
					: state.count,

				history: state.history.filter((_, index) => {
					return index !== state.history.length - 1
				}),
				undoHistory: [...state.undoHistory, action.payload],
			}

		case 'REDO':
			// Redo is the opposite of Undo
			// Count is also the same but again, reverted
			// History gets the action that was stored in undoHistory
			// undoHistory filters out the last undo action
			return {
				count: action.payload
					? action.payload.type === 'INCREMENT'
						? state.count + action.payload.number
						: state.count - action.payload.number
					: state.count,
				history: [...state.history, action.payload],
				undoHistory: state.undoHistory.filter((_, index) => {
					return index !== state.undoHistory.length - 1
				}),
			}

		default:
			return state
	}
}

export default countReducer
