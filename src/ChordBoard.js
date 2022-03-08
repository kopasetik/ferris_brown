import React, {useState} from 'react';
import ChordColumn from './ChordColumn';
import './ChordBoard.css';
import { PolySynth } from 'tone';

const synth = new PolySynth(6).toMaster()

const state =  [
		{chord: 'Bm'},
		{chord: 'Am7'},
		{chord: 'D9'},
		{chord: 'G7'},
		{chord: 'F#7'},
		{chord: 'Am7'},
		{chord: 'E7'},
		{chord: 'Bb7'},
	]

	// attackChord(chordVoicing){
	// 	synth.triggerAttack(chordVoicing)
	// }

	// releaseChord(chordVoicing){
	// 	synth.triggerRelease(chordVoicing)
	// }

function ChordBoard (props){
	const [chords, setChords] = useState(state)

	
	return (<div id="ChordBoardCanvas">
		<div id="ChordBoard">
		{chords
			.map(({chord}, idx) => {
				return (<ChordColumn 
					chord={chord} 
					key={idx}
					// attack={this.attackChord}
					// release={this.releaseChord}
					>
					{chord}
				</ChordColumn>)}
			)}
		</div>
		</div>)
	
}

export default ChordBoard;
