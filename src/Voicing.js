import React from 'react'

function Voicing({
		notes,
		attack,
		release,
		}){

	  const touchStart = (e) => {
		  attack(notes)
	  }

	  const clickStart = (e) => {
		  e.preventDefault()
		  attack(notes)
	  }
	
	  const pressEnd = (e) => {
		  e.preventDefault()
		  release(notes)
	  }
	return (<div 
			className="Voicing"
	  		onTouchStart={touchStart}
	  		onMouseDown={clickStart}
	  		onTouchEnd={pressEnd}
	  		onMouseUp={pressEnd}
	  		onContextMenu={(e) => { e.preventDefault() }}
			>
		</div>)
}

export default Voicing
