import React from 'react';


const Navigation = ({onRouteChange, route}) => {
	return(
		<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			{route === 'register'?
			<p onClick = { () => onRouteChange('signin')} className='f3 dim black link pointer pa3 underline'> Sign In </p>
			:(
				route === 'signin' ?
				<p></p>
				:<p onClick = { () => onRouteChange('signin')} className='f3 dim black link pointer pa3 underline'> Sign Out </p>
			)
		}
		</nav>


	)
}
export default Navigation;