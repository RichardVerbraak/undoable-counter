import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div className='counter-container'>
			<header>
				<h1>Undoable Counter</h1>
			</header>

			<div className='undo-redo-buttons'>
				<button className='btn'>Undo</button>
				<button className='btn'>Redo</button>
			</div>

			<div className='counter-buttons'>
				<button
					className='btn'
					onClick={() => {
						setCount(count - 100)
					}}
				>
					-100
				</button>
				<button
					className='btn'
					onClick={() => {
						setCount(count - 10)
					}}
				>
					-10
				</button>
				<button
					className='btn'
					onClick={() => {
						setCount(count - 1)
					}}
				>
					-1
				</button>

				<p className='count'>{count}</p>

				<button
					className='btn'
					onClick={() => {
						setCount(count + 1)
					}}
				>
					+1
				</button>
				<button
					className='btn'
					onClick={() => {
						setCount(count + 10)
					}}
				>
					+10
				</button>
				<button
					className='btn'
					onClick={() => {
						setCount(count + 100)
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
