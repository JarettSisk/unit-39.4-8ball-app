import React from 'react';
// import logo from './logo.svg';
import EightBall from "./EightBall";
import './App.css';

function App() {
  return (
      <div className="App">
          <h1 className="App-title">8Ball App</h1>
          <div className='container'>
            <EightBall/>
          </div>
      </div>
  );
}

export default App;
