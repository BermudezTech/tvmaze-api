import React, {useState} from 'react';
import Alert from './Alert';
import './styles/CommentsForm.scss';

export default function CommentsForm({showId, updateComments}){
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [comment, setComment] = useState("");
	const [submit, setSubmit] = useState(false);

	const handleChange = e => {
		if(e.target.name === "name"){
			setName(e.target.value);
		}else if(e.target.name === "mail"){
			setMail(e.target.value);
		}else if(e.target.name === "comment"){
			setComment(e.target.value);
		}
		setSubmit(false);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmit(true);
		updateComments();
	}
	let urlComments = `http://localhost/api/commentstvmaze.php?showId=${showId}&operation=post`;
	return(
		<>
			{submit && 
				<Alert  
					urlComments={urlComments}
					name={name} 
					mail={mail} 
					comment={comment}
					setName={setName} 
					setMail={setMail} 
					setComment={setComment} 
					updateComments={updateComments}
				/>
			}
			<h2>COMMENTS</h2>
			<p>Add comments:</p>
			<form onSubmit={handleSubmit} >
				<input type="text" placeholder="Name" autoComplete="off" name="name" onChange={handleChange} value={name}/>
				<input type="mail" placeholder="Email" autoComplete="off" name="mail" onChange={handleChange} value={mail}/>
				<textarea placeholder="Write your comment here" autoComplete="off" name="comment" onChange={handleChange} value={comment}></textarea>
				<input type="submit" value="SUBMIT"/>
			</form>
		</>
	)
}