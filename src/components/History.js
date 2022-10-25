import React from 'react'

const History = ({ history }) => {
	return (
		<div className='history-section'>
			<header>
				<h3 className='history-title'>History</h3>
			</header>

			<div className='history-container'>
				{history.map((action, index) => {
					return (
						<div key={index} className='history__feed'>
							<p className='history__action'>
								{action.type === 'DECREMENT' ? '-' : '+'} {action.number}{' '}
							</p>

							<p className='history__count'>
								{action.prevCount} &rarr; {action.prevCount + action.number}
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default History
