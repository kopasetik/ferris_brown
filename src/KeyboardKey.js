import React from 'react';
import './KeyboardKey.css';

function KeyboardKey({format, 
	children:note,
	isInCurrentScale,
	update,
	play}) {
	
	  const klassName=[
		(format === 'white') ? 'WhiteKey' : 'BlackKey',
		isInCurrentScale ? 'isInCurrentScale' : null
	  ].join(' ')
  return (
    <div 
	  className={klassName}
	  onClick={() => {
		  play(note)
		  update(note)
	  }}
	  >
	  {note}
    </div>
  );
}

export default KeyboardKey;
