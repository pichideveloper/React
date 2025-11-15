import React, { useEffect, useState } from 'react'




const Cards = () => {
  //variabale para almancenar datos de la api
  const [ personajes, setpersonajes] = useState ([]);
  
  //es asincrono, para no esperar que termine una accion y continue otra
  const obtenerPersonajes = async () => {
    const api = await fetch ("https://rickandmortyapi.com/api/character");

    //convertir datos de la api a json
    const datos = await api.json();

    //actualizamos los datos
    setpersonajes(datos.results) ;
  }
   //hook effect , para que inicia cuando arranque el proyecto
     useEffect (() => {
      obtenerPersonajes()
     },[])

      //almacenamos los datos en una constante (opcional)
      const  personajeHTML = personajes.map((personajes)=> {
        return (
          <div key={personajes.id} className='col-12 col-md-6 col-lg-3 mb-4'>
            <div className='card h-100 text-center shadow'>
              <img src={personajes.image} alt={personajes.name} className='card-img-top'></img>
              <div className='card-body'>
                <h5 className='card-title'>Nombre:{personajes.name} </h5>
                <p className='card-text'>Status: {personajes.status}</p>
                <p className='card-text'>Specie: {personajes.species}</p>
                <button className='btn btn-primary'>Pulsame</button>
              </div>
            </div>
          </div>
        )
      })

  return (
    <>
  {/* carrusel full-width (fuera del container) */}
  <div
    id="carruselPrincipal"
    className="carousel slide mb-5"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/img2.jpg" className="d-block w-100" alt="Img1" />
      </div>
      <div className="carousel-item">
        <img src="/img2.jpg" className="d-block w-100" alt="Img2" />
      </div>
      <div className="carousel-item">
        <img src="/img2.jpg" className="d-block w-100" alt="Img3" />
      </div>
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carruselPrincipal"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carruselPrincipal"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </div>

  {/* Contenido centrado con container */}
  <div className="container">
    <h1 className="text-center my-4">Utilizando Fetch API con Rick and Morty</h1>
    <div className="row justify-content-center">{personajeHTML}</div>
  </div>
</>
  );
}

export default Cards
