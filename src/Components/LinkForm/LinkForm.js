import React from 'react';
import './LinkForm.css';

const LinkForm = ({ onInput, onSubmit }) => {
	return(

		<div>
			<div className='center form pa4 br-3 shadow-5'>
				<input className='f4 w-70 pa2 center' 
				type= "text"
				 placeholder="Enter Link" 
				 onChange = {onInput} 
				 />
				<button className=' f4 grow w-30 link ph3 pv2 dib white bg-light-purple'
				onClick = {onSubmit}	
				>Detect</button>
			</div>
		</div>
		
	)
	
}
export default LinkForm;