import React, { Component } from 'react';
import SignupForm from './components/sign-up.js'
import { Route, Link } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
         <nav>
           <Link to="/signup">Dashboard</Link>
         </nav>
         <div>
           <Route path="/signup" component={SignupForm} />
         </div>
      </div>
    );
  }
}

export default App;
