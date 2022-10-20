const countReducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.payload,
			}

		case 'DECREMENT':
			return {
				count: state.count - action.payload,
			}

		case 'UNDO':
			return {}

		case 'REDO':
			return {}

		default:
			return
	}
}

export default countReducer
