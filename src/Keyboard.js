import React from 'react';
import KeyboardKey from './KeyboardKey';
import Dropdowns from './Dropdowns';
import './Keyboard.css';
import Teoria from 'teoria';
import { Synth } from 'tone';

const synth = new Synth().toMaster()

class Keyboard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentScale: 'Bb',
			currentMode: 'major',
			pianoKeys: [
				{note: 'C', color: 'white'},
				{note: 'C#', color: 'black'},
				{note: 'D', color: 'white'},
				{note: 'Eb', color: 'black'},
				{note: 'E', color: 'white'},
				{note: 'F', color: 'white'},
				{note: 'F#', color: 'black'},
				{note: 'G', color: 'white'},
				{note: 'Ab', color: 'black'},
				{note: 'A', color: 'white'},
				{note: 'Bb', color: 'black'},
				{note: 'B', color: 'white'},
				{note: 'C', color: 'white'},
			],
			isFrozen: true,
		}
		
		this.chgMode = this.chgMode.bind(this)
		this.freezeToggle = this.freezeToggle.bind(this)
		this.updateScale = this.updateScale.bind(this)
		this.playNote = this.playNote.bind(this)
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

	playNote(note){
		synth.triggerAttackRelease(note + '4', '8n')
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
				.map(({note,color}, idx) => {
					const isSameNote = scaleNote => (Teoria.note(scaleNote).chroma() === Teoria.note(note).chroma())
					const isInScale = Teoria.note(this.state.currentScale).scale(this.state.currentMode).simple().some(isSameNote)
				return (<KeyboardKey 
					format={color} 
					key={idx}
					update={this.updateScale}
					isInCurrentScale={isInScale}
					play={this.playNote}
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
