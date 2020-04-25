import React from 'react'

function Voicing(props){
	return (<div className="Voicing">
		{props.notes.reduce((acc,curr) => (acc + ' ,'  + curr), '')}
		</div>)
}

export default Voicing
