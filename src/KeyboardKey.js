import React from 'react';
import './KeyboardKey.css';

function KeyboardKey({format, 
	children:note,
	octave,
	isInCurrentScale,
	update,
	attack,
	release}) {
	
	  const klassName=[
		(format === 'white') ? 'WhiteKey' : 'BlackKey',
		isInCurrentScale ? 'isInCurrentScale' : null
	  ].join(' ')
	  const pressStart = () => {
		  attack(note, octave)
		  update(note)
	  }

	  const pressEnd = () => {
		  release(note, octave)
	  }
  return (
    <div 
	  className={klassName}
	  onTouchStart={pressStart}
	  onMouseDown={pressStart}
	  onTouchEnd={pressEnd}
	  onMouseUp={pressEnd}
	  onContextMenu={(e) => { e.preventDefault() }}
	  >
    </div>
  );
}

export default KeyboardKey;
