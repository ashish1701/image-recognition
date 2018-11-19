import React from 'react';
import './FaceImage.css';

const FaceImage = ({ box ,imageUrl }) => {
	return(
		<div>
			<div className='center mt2'> 
				<img id = 'imageInput' src = {imageUrl} 
				alt = '' 
				style={{width: '700px',
				height: 'auto'}}
				/>
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} >
				</div>
			</div>
		</div>
	)
}
export default FaceImage;



