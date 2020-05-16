import React from 'react'

function ProgPlayButton({playAction, chords, chordNotes}){
	
	return (<button onClick={() => {playAction(chordNotes)}}>Play</button>)
}

export default ProgPlayButton
