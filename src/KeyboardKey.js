import React from 'react';
import './KeyboardKey.css';

function KeyboardKey({format}) {
  return (
    <div className={(format === "white")? "WhiteKey": "BlackKey"}>
    </div>
  );
}

export default KeyboardKey;
