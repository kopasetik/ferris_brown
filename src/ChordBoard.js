import React from 'react';
import ChordColumn from './ChordColumn';
import './ChordBoard.css';
import { PolySynth } from 'tone';

const synth = new PolySynth(6).toMaster()

class ChordBoard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentScale: 'Bb',
			currentMode: 'major',
			chords: [
				{chord: 'Am'},
				{chord: 'C7'},
				{chord: 'D9'},
				{chord: 'Dm7'},
				{chord: 'F7'},
				{chord: 'Am7'},
				{chord: 'E7'},
				{chord: 'Bb7'},
			],
		}
		
		this.attackChord = this.attackChord.bind(this)
		this.releaseChord = this.releaseChord.bind(this)
	}

	attackChord(chordVoicing){
		synth.triggerAttack(chordVoicing)
	}

	releaseChord(chordVoicing){
		synth.triggerRelease(chordVoicing)
	}

	render(){
  		return (<div id="ChordBoardCanvas">
			<div id="ChordBoard">
			{this.state.chords
				.map(({chord}, idx) => {
					return (<ChordColumn 
						chord={chord} 
						key={idx}
						attack={this.attackChord}
						release={this.releaseChord}
						>
						{chord}
					</ChordColumn>)}
				)}
			</div>
			</div>)
		}
}

export default ChordBoard;
