import React from 'react';
import './ProgChordBoard.css';
import Voicing from './Voicing'
import ProgPlayButton from './ProgPlayButton'
import { Sequence, PolySynth, Transport, Pattern } from 'tone';
import Teoria from 'teoria'

const synth = new PolySynth().toMaster()

class ProgChordBoard extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			currentScale: 'Bb',
			currentMode: 'major',
			currentArpeggio: 'default',
			chords: [
				{chord: 'Am'},
				{chord: 'Dm'},
				{chord: 'Em'},
				{chord: 'F'},
				{chord: 'G'},
			],
			arpeggios: [
				'default'
			],
		}
		
		this.attackChord = this.attackChord.bind(this)
		this.releaseChord = this.releaseChord.bind(this)
		this.playSequence = this.playSequence.bind(this)
		this.giveChordsNotes = this.giveChordsNotes.bind(this)
		this.setArpeggio = this.setArpeggio.bind(this)
	}

	attackChord(chordVoicing){
		synth.triggerAttack(chordVoicing)
	}

	releaseChord(chordVoicing){
		synth.triggerRelease(chordVoicing)
	}

	playSequence(chordNotes, arpeggio){
		// incorporate arpeggios
		const pattern = new Pattern((time, note) => {
		}, ["C2", "D4", "E5", "A6"], "upDown");

		// const chordIndexes = chordNotes.map((chord, idx) => idx)		

		// const seq = new Sequence(function(val, i){
		// 	synth.triggerAttackRelease(chordNotes[i], '8n')
		// }, chordIndexes, '4n')

		// seq.start(0)
		// seq.loop = 3
		// seq.humanize = true

		Transport.bpm.value = 67
		Transport.start()

	}

	giveChordsNotes(chords){

		const octavedNotes = chords
		    .map(newChord => Teoria.chord(newChord).simple())
		    .reduce((acc, curr) => [...acc, ...curr],[])
		    .map(note => note + '4')

		const chordLengthsInSequence = chords
			.map(newChord => Teoria.chord(newChord).simple())
    			.map(chord => chord.length)
    			.reduce((acc, curr, idx) => [...acc,(acc[acc.length-1] || 0) + curr],[])

		return chordLengthsInSequence
    			.reduce((acc, curr, idx, arr) => {
        			return [...acc, octavedNotes.slice((arr[acc.length-1] || 0), curr)]
    			},[])
	}

	setArpeggio(arpeggio){

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
					playAction={this.playSequence} 
				/>
			</div>)
		}
}

export default ProgChordBoard;
