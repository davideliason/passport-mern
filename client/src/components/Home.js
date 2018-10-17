import React from 'react'

const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<p>Welcome Home, {props.user.name}</p>
				
			</div>
		)
	} else {
		return (
			<div className="Home">
				<p>Hello Stranger!</p>
			</div>
		)
	}
}

export default Home
