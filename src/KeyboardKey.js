import React from 'react';
import './KeyboardKey.css';

function KeyboardKey({format, children:note, update}) {
  return (
    <div 
	  className={(format === "white")? "WhiteKey": "BlackKey"}
	  onClick={() => update(note)}
	  >
	  {note}
    </div>
  );
}

export default KeyboardKey;
