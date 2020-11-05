import React from 'react';
import logo from './logo.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <video autoPlay loop>
          <source src={logo} type="video/mp4"/>
        </video>
      </header>
    </div>
  );
}

export default App;
