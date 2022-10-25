import React from 'react'

const History = ({ history, count }) => {
	return (
		<div className='history-section'>
			<header>
				<h3 className='history-title'>History</h3>
			</header>
			<div className='history-container'>
				{history.map((action, index) => {
					return (
						<div className='history__feed'>
							<p key={index} className='history__action'>
								{action.type === 'DECREMENT' ? '-' : '+'} {action.number}{' '}
							</p>

							<p className='history__count'>
								{action.prevCount} &rarr; {count}
							</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default History
