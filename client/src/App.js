import React, { Component } from 'react';
import SignupForm from './components/SignUpForm';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'



class App extends Component {
  render() {
    return (
      <div className="App">
         <nav>
           <Link to="/signup">Sign Up</Link>
         </nav>
         <div>
           <Route path="/signup" component={SignupForm} />
         </div>
      </div>
    );
  }
}

export default App;
