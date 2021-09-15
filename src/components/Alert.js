import React from 'react';
import {useFetch} from "../hooks/useFetch";
import './styles/Alert.scss';

export default function Alert({message, type, urlComments, name, mail, comment, setName, setMail, setComment}){
	let fetchComments = useFetch(urlComments, {name, mail, comment}, "POST", 'cors');
	let pending = fetchComments.isPending;
	if (pending === false){
		setName("");
		setMail("");
		setComment("");
	}
	return(
		<>
			<div className={`message ${type}`}>
				{message}
			</div>
		</>
	);
}