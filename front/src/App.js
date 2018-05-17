import React, { Component } from 'react';
import Profil from './Profil'
import Header from './Header'
import './bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="header col-md-12">
            <Header />
          </div>
        </div>
        <Profil />

        <p className="App-intro">  </p>
      </div>
    );
  }
}

export default App;
