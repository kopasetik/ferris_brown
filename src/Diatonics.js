import React from 'react'
import Teoria from 'teoria'

// C Major
const CMajDiatonics = ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim']

// A Minor
const AMinDiatonics = [...(CMajDiatonics.slice(5,7)), ...(CMajDiatonics.slice(0,5))]

function Diatonics({rootNote, mode}){
	const interval = Teoria.interval(Teoria.note('C'), Teoria.note(rootNote))
	
	DiatonicSequence = (mode === 'major') ? CMajDiatonics : AMinDiatonics

	return (<div id="Diatonics">
		{CMajDiatonics.map(chord => Teoria.chord(chord).interval(interval))
		    .map(newChord => newChord.name)
		    .map(chordName => (<Voicing 
						chord={chordName} 
						key={idx}
						attack={this.attackChord}
						release={this.releaseChord}
						>
						{chord}
					</Voicing>)
		}
	</div>) 
}
