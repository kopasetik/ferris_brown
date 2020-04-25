import React from 'react'
import Voicing from './Voicing'
import './ChordColumn.css'
import Teoria from 'teoria'

function ChordColumn({chord, attack, release, children}){
	const chordNotes = Teoria.chord(chord).simple()
	// Generate each sequence algorithmically
	const sequence = [5,5,5,5,5,4,5,4,4,4,4,4]
	const sequencedNotes = sequence
	  .map((el, idx) => chordNotes[(idx + 1) % chordNotes.length] + el)
	const voicings = sequencedNotes
	  .reduce((acc, curr, idx, arr) => {
	    if (acc.length !== 0 && acc[acc.length - 1].length !== 3){
				acc[acc.length - 1].push(curr)
				return acc
			}

			acc.push([curr])
			return acc
		}, [])

	return (<div className="ChordColumn">
		{voicings.map((notes, idx) => (<
				Voicing 
				notes={notes}
				key={idx}
				attack={attack}
				release={release}
				/>))}
		{chordNotes.map((note, idx) => (<
				Voicing
				notes={[note + 3]}
				key={voicings.length + idx}
				attack={attack}
				release={release}
				/>))}
		</div>)
}

export default ChordColumn
