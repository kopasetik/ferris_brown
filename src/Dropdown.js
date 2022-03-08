import React, {useState} from 'react';



function Dropdown(props){
    
    return (<select>
        {values.map(val => <option key={val}>{val}</option>)}
    </select>)
    
}