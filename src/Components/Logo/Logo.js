import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className='ma4 mt0'> 
			<Tilt className="Tilt br-2 shadow-4" options={{ max : 60 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3"> 
 					<img style={{padding: '5px'}}alt ='Icon made by Freepik from www.flaticon.com ' src = {logo} /> 
 				</div>
			</Tilt>
		</div>
	)
}

export default Logo;