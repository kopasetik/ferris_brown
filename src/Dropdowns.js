import React from 'react'

function Dropdowns (props) {

	return (
		<div id="dropdowns">
			<p>Scale type</p>
				
			<p>
				<select value={null} onChange={null}>
					<option value="major">Major</option>
					<option value="minor">Minor</option>
					<option value="majorpentatonic">Major Pentatonic</option>
					<option value="minorpentatonic">Minor Pentatonic</option>
					<option value="blues">Blues</option>
				</select>
			</p>

			<p>Freeze?</p>
				
			<p>
				<select value={null} onChange={null}>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</p>
				
		</div>
		)	
}

export default Dropdowns
