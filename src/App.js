import React from 'react';
import './App.css';
import ChordBoard from './ChordBoard.js';

const tones = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'Bb',
  'B'
]

const qualities = []

const extensions = []

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Dropdown values={tones}>
      </Dropdown>
      {/* <Dropdown values={qualities}>
      </Dropdown> */}
      {/* <Dropdown values={extensions}>
      </Dropdown> */}
      <ChordBoard />
      
    </div>
  );
}

export default App;
