import React from 'react'

export const DarkLayout = ({ children }) => {
	return (
		<div style={{
			backgroundColor:'blue',
			borderRadius: '5px',
			padding: '10px',
		}}>
			<h3>Dark-Layout</h3>
			<div>
				{ children }
			</div>
		</div>
	)
}
