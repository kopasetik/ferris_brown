import React from 'react';
import './KeyboardKey.css';

function KeyboardKey({format, children}) {
  return (
    <div className={(format === "white")? "WhiteKey": "BlackKey"}>
	  {children}
    </div>
  );
}

export default KeyboardKey;
