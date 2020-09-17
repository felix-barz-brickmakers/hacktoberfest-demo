import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { next, seed } from './rng';

function App() {
  const [number, setNumber] = useState("<Press generate to get a random number!>");

  useEffect(() => seed(Math.random()), []);

  const onGenerate = () => setNumber(next());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the BEST Random Number Generator ever MADE! Try it!
        </p>
        <p>
          <button onClick={onGenerate}>Generate</button>
        </p>
        <p>{number}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
