import React from 'react';
import ChordColumn from './ChordColumn';
import './ChordBoard.css';
import Teoria from 'teoria';
import { PolySynth } from 'tone';

const synth = new PolySynth(6).toMaster()

class ChordBoard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentScale: 'Bb',
			currentMode: 'major',
			chords: [
				{chord: 'Bb'},
				{chord: 'Cm'},
				{chord: 'Dm'},
				{chord: 'Eb'},
				{chord: 'F'},
				{chord: 'Gm'},
				{chord: 'Am'},
				{chord: 'Bbdim'},
			],
		}
		
		this.attackNote = this.attackNote.bind(this)
		this.releaseNote = this.releaseNote.bind(this)
	}

	attackNote(note, octave){
		synth.triggerAttack([note + octave])
	}

	releaseNote(note, octave){
		synth.triggerRelease([note + octave])
	}

	render(){
  		return (<div id="ChordBoardCanvas">
			<div id="ChordBoard">
			{this.state.chords
				.map(({chord}, idx) => {
					return (<ChordColumn 
						chord={chord} 
						key={idx}
						attack={this.attackNote}
						release={this.releaseNote}
						>
						{chord}
					</ChordColumn>)}
				)}
			</div>
			</div>)
		}
}

export default ChordBoard;
