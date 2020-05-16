import React from 'react';
import './ProgChordBoard.css';
import Voicing from './Voicing'
import ProgPlayButton from './ProgPlayButton'
import { Transport, PolySynth } from 'tone';
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
		this.playTransport = this.playTransport.bind(this)
		this.giveChordsNotes = this.giveChordsNotes.bind(this)
	}

	attackChord(chordVoicing){
		synth.triggerAttack(chordVoicing)
	}

	releaseChord(chordVoicing){
		synth.triggerRelease(chordVoicing)
	}

	playTransport(chordNotes){
		Transport.scheduleRepeat(function(time){
			chordNotes.map((notes, idx) => {
					const timing = (idx > 0) ? `${idx}m` : undefined
					synth.triggerAttackRelease(notes, '16n', timing)
				})
		}, "4n")

		Transport.start()
	}

	giveChordsNotes(chords){

		const octavedNotes = chords
		    .map(newChord => Teoria.chord(newChord).simple())
		    .reduce((acc, curr) => [...acc, ...curr],[])
		    .map(note => note + '4')

		const chordLengthsInSequence = chords
			.map(newChord => Teoria.chord(newChord).simple())
    			//.map(newChord => newChord.simple())
    			.map(chord => chord.length)
    			.reduce((acc, curr, idx) => [...acc,(acc[acc.length-1] || 0) + curr],[])

		return chordLengthsInSequence
    			.reduce((acc, curr, idx, arr) => {
        			return [...acc, octavedNotes.slice((arr[acc.length-1] || 0), curr)]
    			},[])
	}

	render(){

		const destructuredChords = this.state.chords.map(({chord}) => chord)

		const destructuredOctavedChords = this.giveChordsNotes(destructuredChords)

  		return (<div id="ProgChordBoardCanvas">
				<div id="ProgChordBoard">
				{destructuredOctavedChords
					.map((chordNotes, idx) => {
						const chord = destructuredChords[idx]
						return (<Voicing 
							chord={chord} 
							notes={chordNotes}
							key={idx}
							attack={this.attackChord}
							release={this.releaseChord}
							>
							{chord}
						</Voicing>)}
					)}
				</div>
				<ProgPlayButton 
					chords={this.state.chords.map(({chord}) => chord)}
					chordNotes={destructuredOctavedChords} 
					playAction={this.playTransport} 
				/>
			</div>)
		}
}

export default ProgChordBoard;
