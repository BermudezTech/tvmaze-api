import React from 'react';
import './styles/Alert.scss';

export default function Alert({message, type}){
	return(
		<>
			<div className={`message ${type}`}>
				{message}
			</div>
		</>
	);
}