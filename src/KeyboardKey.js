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

	  const touchStart = (e) => {
		  attack(note, octave)
		  update(note)
	  }

	  const clickStart = (e) => {
		  e.preventDefault()
		  attack(note, octave)
		  update(note)
	  }
	
	  const pressEnd = (e) => {
		  e.preventDefault()
		  release(note, octave)
	  }
  return (
    <div 
	  className={klassName}
	  onTouchStart={touchStart}
	  onMouseDown={clickStart}
	  onTouchEnd={pressEnd}
	  onMouseUp={pressEnd}
	  onContextMenu={(e) => { e.preventDefault() }}
	  >
    </div>
  );
}

export default KeyboardKey;
