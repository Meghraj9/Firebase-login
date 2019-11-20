import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authen from './Authen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
      </header>

      
      <Authen />
    </div>
  );
}

export default App;
