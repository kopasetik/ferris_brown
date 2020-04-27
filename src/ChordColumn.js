import React from 'react'
import Voicing from './Voicing'
import './ChordColumn.css'
import Teoria from 'teoria'

function ChordColumn({chord, attack, release, children}){
	
	var chordNotes = Teoria.chord(chord).simple()
		.map(el => el).sort((noteA, noteB) => {
			const chromaNoteA = Teoria.note(noteA).chroma()	
			const chromaNoteB = Teoria.note(noteB).chroma()	
			if (chromaNoteA < chromaNoteB){
				return -1
			}

			if (chromaNoteA > chromaNoteB){
				return 1
			}
			return 0
		})

	// Generate each sequence algorithmically
	// ideal result [5,5,4 ...,4,3,3]
	// ie top and bottom chord have at least one octave-4 note
	
	const sequence = [5,5,4,5,4,4,4,4,4,4,4,3,4,3,3]
	const sequencedNotes = sequence
	  .map((el, idx) => chordNotes[idx % chordNotes.length] + el)
	const voicings = sequencedNotes
	  .reduce((acc, curr, idx, arr) => {
	    if (acc.length !== 0 && acc[acc.length - 1].length !== 3){
				acc[acc.length - 1].push(curr)
				return acc
			}

			acc.push([curr])
			return acc
		}, [])
	const bassNotes = chordNotes.map(el => el).reverse()
	return (<div className="ChordColumn"
	  		onContextMenu={(e) => { e.preventDefault() }}
		>
		{voicings.map((notes, idx) => (<
				Voicing 
				notes={notes}
				key={idx}
				attack={attack}
				release={release}
				/>))}
		{bassNotes.map((note, idx) => (<
				Voicing
				notes={[note + 3]}
				key={voicings.length + idx}
				attack={attack}
				release={release}
				/>))}
		</div>)
}

export default ChordColumn
