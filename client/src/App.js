import React, { Component } from 'react';
import SignupForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

import { Route, Link } from 'react-router-dom'
import axios from 'axios'



class App extends Component {
  render() {
    return (
      <div className="App">
         <nav>
           <Link to="/signup">Sign Up</Link>
           <Link to="/login">Login</Link>
         </nav>
         <div>
           <Route path="/signup" component={SignupForm} />
           <Route path="/login" component={LoginForm} />
         </div>
      </div>
    );
  }
}

export default App;
