import React from 'react'

class Dropdowns extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return(
			<div id="dropdowns">
				<p>Scale type</p>
				
				<p>
					<select>
						<option value="major">Major</option>
						<option value="minor">Minor</option>
						<option value="majorpentatonic">Major Pentatonic</option>
						<option value="minorpentatonic">Minor Pentatonic</option>
						<option value="blues">Blues</option>
					</select>
				</p>

				<p>Freeze?</p>
				
				<p>
					<select>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</p>
				
			</div>
		)	
	}
	
}

export default Dropdowns
