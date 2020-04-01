import React from 'react';
import './KeyboardKey.css';

function KeyboardKey({format, 
	children:note,
	isInCurrentScale,
	update}) {
	
	  const klassName=[
		(format === 'white') ? 'WhiteKey' : 'BlackKey',
		isInCurrentScale ? 'isInCurrentScale' : null
	  ].join(' ')
  return (
    <div 
	  className={klassName}
	  onClick={() => update(note)}
	  >
	  {note}
    </div>
  );
}

export default KeyboardKey;
