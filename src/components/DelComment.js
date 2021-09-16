import React from 'react';
import {useFetch} from "../hooks/useFetch";

export default function DelComment({commentId, setCommentId, setDeletingComment, showId, updateComments}){
	let urlDel = `http://localhost/api/commentstvmaze.php?showId=${showId}&operation=delete`;
	let delComments = useFetch(urlDel, {commentId}, 'POST');
	let pending = delComments.isPending;
	if (pending === false){
		setDeletingComment(false);
		setCommentId(0);
		updateComments();
	}
	return(
		<>
			<span></span>
		</>
	);
}
