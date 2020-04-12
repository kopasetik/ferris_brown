import React from 'react'

function Dropdowns ({ currentMode, chgScale, isFrozen, freezeToggle }) {
	return (
		<div id="dropdowns">
			<p>Scale type</p>
				
			<p>
				<select value={currentMode} onChange={chgScale}>
					<option value="major">Major</option>
					<option value="minor">Minor</option>
					<option value="majorpentatonic">Major Pentatonic</option>
					<option value="minorpentatonic">Minor Pentatonic</option>
					<option value="blues">Blues</option>
				</select>
			</p>

			<p>Freeze?</p>
				
			<p>
				<select value={isFrozen} onChange={freezeToggle}>
					<option value={true}>Yes</option>
					<option value={false}>No</option>
				</select>
			</p>
				
		</div>
		)	
}

export default Dropdowns
