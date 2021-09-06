import "./App.scss";
import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contenido from './components/Contenido'

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [showId, setShowId] = useState(null);
  const changeBusqueda = query => {
    setBusqueda(query);
  }
  const contenido = busqueda !== "" ? <Contenido busqueda={busqueda} showId={showId} setShowId={setShowId}/> : "";
  return (
    <>
      <Header changeBusqueda={changeBusqueda} busqueda={busqueda} setShowId={setShowId}/>
      {contenido}
      <Footer />
    </>
  );
}

export default App;
