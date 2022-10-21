import React, { useReducer } from 'react'
import countReducer from '../countReducer'

const Counter = () => {
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

	const undo = () => {
		const removed = state.history.slice(-1)[0]

		if (removed !== undefined) {
			dispatch({
				type: 'UNDO',
				payload: removed,
			})
		}
	}

	const redo = () => {
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

			<div className='undo-redo-buttons'>
				<button
					onClick={() => {
						undo()
					}}
					className='btn'
				>
					Undo
				</button>
				<button
					disabled={state.undoHistory.length === 0}
					onClick={redo}
					className='btn'
				>
					Redo
				</button>
			</div>

			<div className='counter-buttons'>
				<button
					className='btn'
					onClick={(e) => {
						handleDecrement(e)
					}}
				>
					-100
				</button>
				<button
					className='btn'
					onClick={(e) => {
						handleDecrement(e)
					}}
				>
					-10
				</button>
				<button
					className='btn'
					onClick={(e) => {
						handleDecrement(e)
					}}
				>
					-1
				</button>

				<p className='count'>{state.count}</p>

				<button
					className='btn'
					onClick={(e) => {
						handleIncrement(e)
					}}
				>
					+1
				</button>
				<button
					className='btn'
					onClick={(e) => {
						handleIncrement(e)
					}}
				>
					+10
				</button>
				<button
					className='btn'
					onClick={(e) => {
						handleIncrement(e)
					}}
				>
					+100
				</button>
			</div>

			<div className='history'>
				<header>
					<h3>History</h3>
				</header>
			</div>
		</div>
	)
}

export default Counter
