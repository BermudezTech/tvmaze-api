import React from 'react';

export default function Comment({name, mail, comment}){
	return(
		<>
			<hr style={{border: "2px solid #289389"}}/>
			<h2 style={{margin: "0px"}}>{name}</h2>
			<p style={{margin: "0px"}}>{mail}</p>
			<p>{comment}</p>
		</>
	)
}