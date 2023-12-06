import React from 'react';

export default function Comment({name, mail, comment, commentId, setCommentId, setDeletingComment}){
	const delButton = {
		display: "flex",
	    position: "relative",
	    top: "30px",
	    left: "90%",
	    backgroundColor: "#289389",
	    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
	    borderRadius: "100px",
	    width: "32px",
	    height: "32px",
	    justifyContent: "center",
	    alignItems: "center",
	    cursor: "pointer"
    }
    const delComment = () => {
    	setCommentId(commentId);
    	setDeletingComment(true);
    }
	return(
		<>
			<span style={delButton} onClick={delComment}>X</span>
			<hr style={{border: "2px solid #289389"}}/>
			<h2 style={{margin: "0px"}}>{name}</h2>
			<p style={{margin: "0px"}}>{mail}</p>
			<p>{comment}</p>
		</>
	)
}