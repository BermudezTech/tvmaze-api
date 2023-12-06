import React from "react";
import Media from "./Media";
import Loader from "./Loader";
import {useFetch} from "../hooks/useFetch";
import MediaInfo from "./MediaInfo";
import "./styles/Contenido.scss";

export default function Contenido({busqueda, showId, setShowId}){
	let query = busqueda.toLowerCase();
	let url = `https://api.tvmaze.com/search/shows?q=${query}`;
	let {data, isPending, error} = useFetch(url);
	//console.log(error);
	return(
		<>
			{isPending === true && <Loader />}
			{showId !== null && <MediaInfo showId={showId} setShowId={setShowId} />}
			<div className="Contenedor">
				{(data !== null && showId === null) ? (
					data.map(e => (
							<Media
								setShowId={setShowId} 
								id={e.show.id}
								className="Media" 
								key={e.show.id} 
								title={e.show.name} 
								imgUrl={e.show.image !== null ? e.show.image.original: "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"}/>
						))
				) : (<span></span>)}
				{(data !== null) ? (<h2 style={{color: 'white'}}>{data.length === 0 ? "No results found":""}</h2>) : (<span></span>)}
				{(error !== null) && <h2 style={{color: 'white'}}>{error.stack}</h2>}
			</div>
		</>
	);
}