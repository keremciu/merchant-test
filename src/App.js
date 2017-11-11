import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// relative imports
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome</h2>
          </Link>
        </div>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
