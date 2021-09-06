import React from 'react';
import './styles/CommentsForm.scss';

export default function CommentsForm(){
	return(
		<>
			<h2>COMMENTS</h2>
			<p>Add comments:</p>
			<form>
				<input type="text" placeholder="Name"/>
				<input type="mail" placeholder="Email"/>
				<textarea placeholder="Write your comment here"></textarea>
				<input type="submit" value="SUBMIT"/>
			</form>
		</>
	)
}