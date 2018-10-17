import React, { Component } from 'react';
import SignupForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home'

import { Route, Link } from 'react-router-dom'
import axios from 'axios'

const DisplayLoggedOutLinks= props => {
	if (props.loggedIn) {
		return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link" onClick={props._logout}>
              Logout
            </Link>
          </li>
        </ul>
    </nav>
		)
  }
  else {
    return (
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              sign up
            </Link>
          </li>
        </ul>
    </nav>
    )
  }
}

class App extends Component {
  constructor() {
		super()
		this.state = {
			loggedIn: true,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
  }
  
  _logout(event) {
		event.preventDefault()
		console.log('logging out')
	}

	_login(username, password) {
    console.log("log in init");
    console.log(username, password);
  }
  
  render() {
    return (
      <div className="App">
         <nav>
           <Link to="/"> Home</Link>
         </nav>
         <DisplayLoggedOutLinks loggedIn={this.state.loggedIn} _logout={this._logout} />
         <div>
           <Route path="/signup" component={SignupForm} />
           <Route 
              exact path="/login"
				      render={() =>
					    	<LoginForm
						    	_login={this._login}
					  	/>}
	         />
			     <Route exact path="/" render={() => <Home user={this.state.user} />} />

         </div>
      </div>
    );
  }
}

export default App;
