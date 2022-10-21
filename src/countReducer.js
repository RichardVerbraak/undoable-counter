const countReducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + action.payload,
				history: [
					...state.history,
					{ action: 'INCREMENT', number: action.payload },
				],
			}

		case 'DECREMENT':
			return {
				...state,
				count: state.count - action.payload,
				history: [
					...state.history,
					{ action: 'DECREMENT', number: action.payload },
				],
			}

		case 'UNDO':
			return {
				count: action.payload
					? action.payload.action === 'INCREMENT'
						? state.count - action.payload.number
						: state.count + action.payload.number
					: state.count,

				history: state.history.filter((_, index) => {
					return index !== state.history.length - 1
				}),
				undoHistory: [...state.undoHistory, action.payload],
			}

		case 'REDO':
			return {
				count: action.payload
					? action.payload.action === 'INCREMENT'
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
