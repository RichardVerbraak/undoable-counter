import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	const [history, setHistory] = useState([])

	const handleDecrement = (e) => {
		const number = Number(e.target.innerText.split('').slice(1).join(''))

		setCount(count - number)
	}

	const handleIncrement = (e) => {
		const number = Number(e.target.innerText.split('').slice(1).join(''))

		setCount(count + number)
	}

	const undo = () => {}

	const redo = () => {}

	return (
		<div className='counter-container'>
			<header>
				<h1>Undoable Counter</h1>
			</header>

			<div className='undo-redo-buttons'>
				<button onClick={undo} className='btn'>
					Undo
				</button>
				<button className='btn'>Redo</button>
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

				<p className='count'>{count}</p>

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
