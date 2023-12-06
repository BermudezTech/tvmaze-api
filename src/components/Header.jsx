import React from "react";
import logo from "./img/logoTVMAZE.png";
import Buscador from "./Buscador";
import './styles/header.scss';

export default function Header({changeBusqueda,busqueda,setShowId}) {
  const logoStyle = {
    maxWidth: "530px",
    width: busqueda === "" ? "50%" : "120px",
    height: "80%",
    marginRight: busqueda === "" ? "0px" : "20px",
    cursor: busqueda === "" ? "auto" : "pointer",
  };
  const headerStyle = {
    flexDirection: busqueda === "" ? "column" : "row",
    alignItems: busqueda === "" ? "center" : "space-between",
    justifyContent: busqueda === "" ? "space-between" : "center",
    marginTop: busqueda === "" ? "15vh" : "5vh",
    height: busqueda === "" ? "40vh" : "5vh",
  }
  return (
    <>
      <div className="header inicio" style={headerStyle}>
        <div style={logoStyle} className="logo" onClick={() => {changeBusqueda(""); setShowId(null)}}>
          <img src={logo} alt="logo"  />
        </div>
        <Buscador 
          changeBusqueda={changeBusqueda} 
          busqueda={busqueda}
          setShowId={setShowId}
          style={{marginTop: "20px 0px"}}
        />
      </div>
    </>
  );
}
