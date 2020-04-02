import React from 'react';
import KeyboardKey from './KeyboardKey';
import './Keyboard.css';
import Teoria from 'teoria';


class Keyboard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentScale: 'C',
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
			]
		}

		this.updateScale = this.updateScale.bind(this)
	}

	updateScale(newScale){
		this.setState({currentScale: newScale})
	}

	componentDidMount(){
	}

	componentDidUpdate(){
	}

	render(){
  		return (<div id="Keyboard">
			{this.state.pianoKeys
				.map(({note,color}, idx) => {
					const isSameNote = scaleNote => (Teoria.note(scaleNote).chroma() === Teoria.note(note).chroma())
					const isInScale = Teoria.note(this.state.currentScale).scale(this.state.currentMode).simple().some(isSameNote)
				return (<KeyboardKey 
					format={color} 
					key={idx}
					update={this.updateScale}
					isInCurrentScale={isInScale}
					>
					{note}
				</KeyboardKey>)}
				)}
			</div>)
		}
}

Keyboard.defaultProps = {
	scale: 'C'
}

export default Keyboard;
