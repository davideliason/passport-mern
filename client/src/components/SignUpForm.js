import React, { Component } from 'react'

const axios = require('axios');

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
		this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleUsernameChange(event) {
		this.setState({
			username: event.target.value
		})
    }
    
    handlePasswordChange(event) {
		this.setState({
			password: event.target.value
		})
    }

	handleSubmit(event) {
        event.preventDefault()
        console.log("okay form was POSTed");
		// axios
		// 	.post('/auth/signup', {
		// 		username: this.state.username,
		// 		password: this.state.password
		// 	})
		// 	.then(response => {
		// 		console.log(response)
		// 		if (!response.data.errmsg) {
		// 			console.log('form submitted successfully')
		// 		} else {
		// 			console.log('that is a duplicate entry!')
		// 		}
		// 	})
	}
	render() {
		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<label>Username: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleUsernameChange}
				/>
				<label>Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handlePasswordChange}
				/>
				<button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default SignupForm
