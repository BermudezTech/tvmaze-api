import React, {useState} from 'react';
import {useFetch} from "../hooks/useFetch";
import Comment from './Comment';
import CommentsForm from './CommentsForm';
import Loader from "./Loader";
import DelComment from "./DelComment";

export default function Comments({showId}){
	//api Comments
	const [reloader, setReloader] = useState(1);
	const [urlComments, setUrlComments] = useState(`http://localhost/api/commentstvmaze.php?showId=${showId}&operation=get&reload=${reloader}`);
	const [deletingComment, setDeletingComment] = useState(false);
	const [commentId, setCommentId] = useState(0);

	let fetchComments = useFetch(urlComments);
	let comments = undefined;
	if (fetchComments['data'] !== null) {
		comments = Object.keys(fetchComments['data']).map((key) => fetchComments['data'][key]);
	}else{
		comments = [];
	}
	let loader = null;
	if(fetchComments['isPending']){
		loader = <Loader />;
	}else{
		loader = <span></span>;
	}

	const updateComments = () =>{
		setReloader(reloader+1);
		setUrlComments(`http://localhost/api/commentstvmaze.php?showId=${showId}&operation=get&reload=${reloader+1}`);
	}

	return(
		<>
			<CommentsForm showId={showId} updateComments={updateComments}/>
			{loader}
			{comments.map(e => <Comment 
									key={e.commentId} 
									name={e.name} 
									mail={e.mail} 
									comment={e.comment} 
									commentId={e.commentId} 
									setCommentId={setCommentId} 
									setDeletingComment={setDeletingComment}/>)}
			{deletingComment && <DelComment 
									showId={showId}
									commentId={commentId}
									setCommentId={setCommentId} 
									setDeletingComment={setDeletingComment}
									updateComments={updateComments}/>}
		</>
	)
}