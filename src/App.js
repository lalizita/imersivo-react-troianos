import React, { Component } from 'react';
import Login from './Components/Login';
import Perfil from './Components/Perfil';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exac path="/Login" component={Login} />
          <Route  exac path="/" component={Perfil} />
        </div>
      </Router>
    );
  }
}

export default App;
