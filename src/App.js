import React from 'react';
import logo from './rosenberg_bello.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Rosenberg and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/Bello2441"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
