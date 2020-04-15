import React from 'react';
import KeyboardKey from './KeyboardKey';
import Dropdowns from './Dropdowns';
import './Keyboard.css';
import Teoria from 'teoria';
import { PolySynth } from 'tone';

const synth = new PolySynth(6).toMaster()

class Keyboard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentScale: 'Bb',
			currentMode: 'major',
			pianoKeys: [
				{note: 'C', color: 'white', octave: 4},
				{note: 'C#', color: 'black', octave: 4},
				{note: 'D', color: 'white', octave: 4},
				{note: 'Eb', color: 'black', octave: 4},
				{note: 'E', color: 'white', octave: 4},
				{note: 'F', color: 'white', octave: 4},
				{note: 'F#', color: 'black', octave: 4},
				{note: 'G', color: 'white', octave: 4},
				{note: 'Ab', color: 'black', octave: 4},
				{note: 'A', color: 'white', octave: 4},
				{note: 'Bb', color: 'black', octave: 4},
				{note: 'B', color: 'white', octave: 4},
				{note: 'C', color: 'white', octave: 5},
				{note: 'C#', color: 'black', octave: 5},
				{note: 'D', color: 'white', octave: 5},
				{note: 'Eb', color: 'black', octave: 5},
				{note: 'E', color: 'white', octave: 5},
				{note: 'F', color: 'white', octave: 5},
				{note: 'F#', color: 'black', octave: 5},
				{note: 'G', color: 'white', octave: 5},
				{note: 'Ab', color: 'black', octave: 5},
				{note: 'A', color: 'white', octave: 5},
				{note: 'Bb', color: 'black', octave: 5},
				{note: 'B', color: 'white', octave: 5},
				{note: 'C', color: 'white', octave: 6},
			],
			isFrozen: true,
		}
		
		this.chgMode = this.chgMode.bind(this)
		this.freezeToggle = this.freezeToggle.bind(this)
		this.updateScale = this.updateScale.bind(this)
		this.attackNote = this.attackNote.bind(this)
		this.releaseNote = this.releaseNote.bind(this)
	}

	chgMode(event){
		this.setState({currentMode: event.target.value})
	}

	freezeToggle(){
		this.setState({isFrozen: !this.state.isFrozen})
	}	

	updateScale(newScale){
		if (!this.state.isFrozen){ this.setState({currentScale: newScale}) }
	}

	attackNote(note, octave){
		synth.triggerAttack([note + octave])
	}

	releaseNote(note, octave){
		synth.triggerRelease([note + octave])
	}

	componentDidMount(){
	}

	componentDidUpdate(){
	}

	render(){
  		return (<div id="KeyboardCanvas">
			<Dropdowns 
				currentMode={this.state.currentMode} 
				chgScale={this.chgMode} 
				isFrozen={this.state.Frozen} 
				freezeToggle={this.freezeToggle} />
			<div id="Keyboard">
			{this.state.pianoKeys
				.map(({note,color,octave}, idx) => {
					const isSameNote = scaleNote => (Teoria.note(scaleNote).chroma() === Teoria.note(note).chroma())
					const isInScale = Teoria.note(this.state.currentScale).scale(this.state.currentMode).simple().some(isSameNote)
				return (<KeyboardKey 
					octave={octave}
					format={color} 
					key={idx}
					update={this.updateScale}
					isInCurrentScale={isInScale}
					attack={this.attackNote}
					release={this.releaseNote}
					>
					{note}
				</KeyboardKey>)}
				)}
			</div>
			</div>)
		}
}

Keyboard.defaultProps = {
	scale: 'C'
}

export default Keyboard;
