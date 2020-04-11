import React from 'react';
import './App.css';
import Keyboard from './Keyboard.js';
import Dropdowns from './Dropdowns.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <Dropdowns />
	  <Keyboard />
      </header>
    </div>
  );
}

export default App;
