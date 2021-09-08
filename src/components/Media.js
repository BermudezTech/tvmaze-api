import React from "react";
import './styles/Media.scss';

export default function Media({title, imgUrl, id, setShowId}){
	const mediaImgStyle = {
		background: `url(${imgUrl})`,
		backgroundSize: "cover",
	}
	return(
		<>
			<div className="media" onClick={() => {setShowId(id)}}>
				<div className="media-img" style={mediaImgStyle}/>
				<p>{title}</p>
			</div>
		</>
	);
}