import React, {useState} from "react";
import './styles/Buscador.scss';
import searchLogo from "./img/SearchBtn.svg";

export default function Buscador({changeBusqueda, busqueda, setShowId}) {
  const [focus, setFocus] = useState(false);
  const manageSearch = (e) =>{
    changeBusqueda(e.target.value);
    setShowId(null);
  };
  const handleFocus = e =>{
    setFocus(e.type === "focus" ? true : false);
  };
  const boxStyle = {
    border: focus ? "2px solid #288e83" : "none",
  };
  return (
    <>
      <div className="buscador" style={boxStyle}>
        <form onSubmit={e => e.preventDefault()}>
          <input 
            onChange={manageSearch} 
            value={busqueda} 
            type="text" 
            placeholder="Write the name of the serie or movie..." 
            onFocus={handleFocus}
            onBlur={handleFocus}/>
        </form>
        <button type="submit" disabled className="searchBtn">
          <img src={searchLogo} alt="searchBtn"/>
        </button>
      </div>
    </>
  );
}
