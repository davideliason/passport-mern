import React, { Component } from 'react';
import SignupForm from './components/sign-up.js'
import { Route, Link } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
         <nav>
           <Link to="/dashboard">Dashboard</Link>
         </nav>
        <SignupForm />
      </div>
    );
  }
}

export default App;
