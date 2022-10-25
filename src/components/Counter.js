import React from 'react'

const Counter = ({ undo, redo, decrement, increment, undoHistory, count }) => {
	return (
		<div className='counter-section'>
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
					disabled={undoHistory.length === 0}
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
						decrement(e)
					}}
				>
					-100
				</button>
				<button
					className='btn'
					onClick={(e) => {
						decrement(e)
					}}
				>
					-10
				</button>
				<button
					className='btn'
					onClick={(e) => {
						decrement(e)
					}}
				>
					-1
				</button>

				<p className='count'>{count}</p>

				<button
					className='btn'
					onClick={(e) => {
						increment(e)
					}}
				>
					+1
				</button>
				<button
					className='btn'
					onClick={(e) => {
						increment(e)
					}}
				>
					+10
				</button>
				<button
					className='btn'
					onClick={(e) => {
						increment(e)
					}}
				>
					+100
				</button>
			</div>
		</div>
	)
}

export default Counter
