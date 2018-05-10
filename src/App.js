import React, { Component } from 'react';
import Login from './Components/Login';
import Perfil from './Components/Perfil';
import Posts from './Components/Posts';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Perfil} />
          <Route path="/posts" component={Posts} />
        </div>
      </Router>
    );
  }
}

export default App;
