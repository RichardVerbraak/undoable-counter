import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div className='counter-container'>
			<header>
				<h1>Undoable Counter</h1>
			</header>

			<div>
				<p>Undo</p>
				<p>Redo</p>
			</div>

			<div>
				<p>-100</p>
				<p>-10</p>
				<p>-1</p>

				<p className='count'>{count}</p>

				<p>+1</p>
				<p>+10</p>
				<p>+100</p>
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
