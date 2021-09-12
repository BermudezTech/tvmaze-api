import React, {useState} from 'react';
import './styles/CommentsForm.scss';

export default function CommentsForm(){
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");

	const handleChange = e => {
		//console.log(e);
		if(e.target.name === "name"){
			setName(e.target.value);
		}else if(e.target.name === "email"){
			setEmail(e.target.value);
		}else if(e.target.name === "comment"){
			setComment(e.target.value);
		}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("The form has been submited!");
	}
	return(
		<>
			<h2>COMMENTS</h2>
			<p>Add comments:</p>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Name" name="name" onChange={handleChange} value={name}/>
				<input type="mail" placeholder="Email" name="email" onChange={handleChange} value={email}/>
				<textarea placeholder="Write your comment here" name="comment" onChange={handleChange} value={comment}></textarea>
				<input type="submit" value="SUBMIT"/>
			</form>
		</>
	)
}