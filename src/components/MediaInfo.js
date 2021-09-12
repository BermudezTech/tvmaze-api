import React from 'react';
import './styles/MediaInfo.scss';
import CommentsForm from './CommentsForm';
import Comment from './Comment';
import Loader from "./Loader";
//import Alert from "./Alert";
import {useFetch} from "../hooks/useFetch";

const B = (props) => <span style={{fontWeight: 'bold'}}>{props.text}</span>
export default function MediaInfo({showId, setShowId}){
	let image = "";
	// api TVMaze
	let url = `https://api.tvmaze.com/shows/${showId}`;
	let {data, isPending} = useFetch(url, 'cors');
	//console.log(data);
	if (data !== null){
		if (data.image !== null){
			image = data.image.original;
		}else{
			image = "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
		}
	}
	let loader = null;
	if(isPending){
		loader = <Loader />;
	}else{
		loader = <span></span>;
	}

	//api Comments

	let urlComments = `http://localhost/api/commentstvmaze.php?showId=${showId}&operation=get&data=hola`;
	let fetchComments = useFetch(urlComments, 'no-cors');
	//console.log(fetchComments['data']);
	let comments = undefined;
	if (fetchComments['data'] !== null) {
		comments = Object.keys(fetchComments['data']).map((key) => fetchComments['data'][key]);
	}else{
		comments = [];
	}
	//console.log(comments);

	return(
		<>
		<div className="MediaInfo">
			<h2 onClick={() => setShowId(null)} className="h2-link">Regresar</h2>
			<div className="mainInfo">
				<div className="mediaImg" style={{backgroundImage: `url(${image})`}}></div>
				<div className="mediaDesc">
					{loader}
					<h1>{data !== null && data.name}</h1>
					<div dangerouslySetInnerHTML={{__html: data !== null ? data.summary : ""}}></div>	
				</div>
			</div>
			<div className="aditionalInfo">
				<div className="showInfo">
					<h2>SHOW INFO</h2>
					<p>
						<B text="Network: " />{data !== null && (data.network !== null ? data.network.country.name : 'Not available')} {data !== null && (data.network !== null ? data.network.name : ' ')}
						<br/><B text="Schedule: " />{data !== null && data.schedule.days} at {data !== null && data.schedule.time} ({data !== null && data.runtime} min)
						<br/><B text="Status: " />{data !== null && data.status}
						<br/><B text="Show Type: " />{data !== null && data.type}
						<br/><B text="Genres: " />{data !== null && data.genres.map(e => `${e} `)}
						<br/><B text="Official site: " /><a href={data !== null ? (data.officialSite ?? 'Not available') : undefined} about="_blank">{data !== null && (data.officialSite ?? 'Not available')}</a>
					</p>
			</div>
			<div className="commentsSection" style={{width: "100%"}}>
				<CommentsForm />
				{comments.map(e => <Comment key={e.commentId} name={e.name} mail={e.mail} comment={e.comment}/>)}
			</div>
			</div>
		</div>
		</>
	);
}