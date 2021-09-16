import React from 'react';
import {useFetch} from "../hooks/useFetch";
import './styles/Alert.scss';

export default function Alert({urlComments, name, mail, comment, setName, setMail, setComment}){
	let fetchComments = useFetch(urlComments, {name, mail, comment}, "POST", 'cors');
	let pending = fetchComments.isPending;
	let message = "";
	let type = "";

	if (pending === false){
		message="El comentario se creo correctamente";
		type="success";
		setName("");
		setMail("");
		setComment("");
	}else{
		message = "Un error ha ocurrido.";
		type = "error";
	}
	return(
		<>
			<div className={`message ${type}`}>
				{message}
			</div>
		</>
	);
}