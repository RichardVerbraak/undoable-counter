import React, { useReducer } from 'react'
import countReducer from '../countReducer'

import Counter from './Counter'
import History from './History'

// If the component would've gotten a bit more complex the entire Reducer and all of it's dispatch actions could be
// moved into it's own hook for better readability
const CounterContainer = () => {
	const [state, dispatch] = useReducer(countReducer, {
		count: 0,
		history: [],
		undoHistory: [],
	})

	const handleDecrement = (e) => {
		const number = Number(e.target.innerText.split('').slice(1).join(''))

		dispatch({
			type: 'DECREMENT',
			payload: number,
		})
	}

	const handleIncrement = (e) => {
		const number = Number(e.target.innerText.split('').slice(1).join(''))

		dispatch({
			type: 'INCREMENT',
			payload: number,
		})
	}

	const handleUndo = () => {
		const removed = state.history.slice(-1)[0]

		if (removed !== undefined) {
			dispatch({
				type: 'UNDO',
				payload: removed,
			})
		}
	}

	const handleRedo = () => {
		const removed = state.undoHistory.slice(-1)[0]

		if (removed !== undefined) {
			dispatch({
				type: 'REDO',
				payload: removed,
			})
		}
	}

	return (
		<div className='counter-container'>
			<header>
				<h1>Undoable Counter</h1>
			</header>

			<Counter
				undo={handleUndo}
				redo={handleRedo}
				decrement={handleDecrement}
				increment={handleIncrement}
				count={state.count}
				undoHistory={state.undoHistory}
			/>

			<History history={state.history} />
		</div>
	)
}

export default CounterContainer
