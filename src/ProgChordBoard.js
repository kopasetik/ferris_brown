import React from 'react';
import './ProgChordBoard.css';
import Voicing from './Voicing'
import { PolySynth } from 'tone';
import Teoria from 'teoria'

const synth = new PolySynth(6).toMaster()

class ProgChordBoard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentScale: 'Bb',
			currentMode: 'major',
			chords: [
				{chord: 'Bm'},
				{chord: 'Am7'},
				{chord: 'D9'},
				{chord: 'G7'},
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
  		return (<div id="ProgChordBoardCanvas">
			<div id="ProgChordBoard">
			{this.state.chords
				.map(({chord}, idx) => {
					return (<Voicing 
						chord={chord} 
						notes={Teoria.chord(chord).simple().map(note => note + 4)}
						key={idx}
						attack={this.attackChord}
						release={this.releaseChord}
						>
						{chord}
					</Voicing>)}
				)}
			</div>
			</div>)
		}
}

export default ProgChordBoard;
