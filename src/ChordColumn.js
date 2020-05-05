import React from 'react'
import Voicing from './Voicing'
import './ChordColumn.css'
import Teoria from 'teoria'

function ChordColumn({chord, attack, release, children}){
	
	const chordNotes = Teoria.chord(chord).simple()
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
	 
	const cLen = chordNotes.length

	// Generate each sequence algorithmically
	// ideal result [5,5,4 ...,4,3,3]
	// [5,5,4,5,5,4,5,5,4,5,5,4,5,5,4]
	// [0,0,0,0,1,0,1,1,0,1,1,1,1,2,1]
	// ie top and bottom chord have at least one octave-4 note
	
	const sequence = [[5,5,4, // triad
			  5,4,4,
			  4,4,4,
			  4,4,3,
			  4,3,3],
			[5,5,4,4, // 7ths
			 5,4,4,4,
			 4,4,4,4,
			 4,4,4,3,
			 4,4,3,3],
			[5,5,5,4,4, // 9ths
			 5,5,4,4,4,
			 5,4,4,4,4,
			 4,4,4,4,4,
			 4,4,4,4,3],
			[5,5,5,4,4,4, // 11ths
			 5,5,4,4,4,4,
			 5,4,4,4,4,4,
			 4,4,4,4,4,4,
			 4,4,4,4,4,3]]
	const sequencedNotes = sequence[cLen - 3]
	  .map((el, idx) => chordNotes[idx % cLen] + el)
	const voicings = sequencedNotes
	  .reduce((acc, curr, idx, arr) => {
	    if (acc.length !== 0 && acc[acc.length - 1].length !== cLen){
				acc[acc.length - 1].push(curr)
				return acc
			}

			acc.push([curr])
			return acc
		}, [])
	const bassNotes = chordNotes.map(el => el).reverse()
	const bLen = bassNotes.length
	return (<div className="ChordColumn"
	  		onContextMenu={(e) => { e.preventDefault() }}
		>
		{voicings.slice(0,1).map((notes, idx) => (<
				Voicing
				chord={chord}
				notes={notes}
				key={idx}
				attack={attack}
				release={release}
				/>))}
		{voicings.slice(1,voicings.length).map((notes, idx) => (<
				Voicing 
				notes={notes}
				key={idx + 1}
				attack={attack}
				release={release}
				/>))}
		{bassNotes.slice(bLen - 3, bLen).map((note, idx) => (<
				Voicing
				notes={[note + 3]}
				key={voicings.length + idx}
				attack={attack}
				release={release}
				/>))}
		</div>)
}

export default ChordColumn
