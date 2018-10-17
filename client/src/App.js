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
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
			</nav>
		)
  }
  else {
    return (
      <nav className="navbar">
        <Link to="/login">Login</Link>
     </nav>
    )
  }
}

class App extends Component {
  constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: {
        "name" : "David"
      }
		}
		// this._logout = this._logout.bind(this)
		// this._login = this._login.bind(this)
	}
  render() {
    return (
      <div className="App">
         <nav>
           <Link to="/signup">Sign Up</Link>
           <Link to="/"> Home</Link>
         </nav>
         <DisplayLoggedOutLinks loggedIn={this.state.loggedIn} />
         <div>
           <Route path="/signup" component={SignupForm} />
           <Route path="/login" component={LoginForm} />
			     <Route exact path="/" render={() => <Home user={this.state.user} />} />

         </div>
      </div>
    );
  }
}

export default App;
