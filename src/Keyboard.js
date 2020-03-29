import React from 'react';
import KeyboardKey from './KeyboardKey';
import './Keyboard.css';
import Teoria from 'teoria';

Teoria.note('Ab3').scale('major').simple()
	.map(note => (note + ' goodness'))
	.map(note => {
		console.log(note)
	})

function Keyboard() {
  return (
    <div id="Keyboard">
	  <KeyboardKey format="white">
	  	C
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	C#
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	D
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	Eb
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	E
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	F
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	F#
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	G
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	Ab
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	A
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	Bb
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	B
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	C
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	C#
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	D
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	Eb
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	E
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	F
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	F#
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	G
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	Ab
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	A
	  </KeyboardKey>
	  <KeyboardKey format="black">
	  	Bb
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	B
	  </KeyboardKey>
	  <KeyboardKey format="white">
	  	C
	  </KeyboardKey>
    </div>
  );
}

export default Keyboard;
