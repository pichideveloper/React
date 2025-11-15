import React from 'react'

const Contacto = () => {
  return (
    <>
  {/*  Carrusel FULL-WIDTH */}
  <div
    id="carruselPrincipal"
    className="carousel slide mb-5"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/img4.jpg" className="d-block w-100" alt="Img1" />
      </div>
      <div className="carousel-item">
        <img src="/img4.jpg" className="d-block w-100" alt="Img2" />
      </div>
      <div className="carousel-item">
        <img src="/img4.jpg" className="d-block w-100" alt="Img3" />
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

  {/*  Contenido centrado: formulario + mapa */}
  <div className="container">
    {/* Formulario */}
    <div className="mb-5">
      <h3 className="mb-3">Contáctanos</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="ejemplo@correo.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>

    {/* Google Maps */}
    <div className="mb-5">
      <h3 className="mb-3">Ubicación</h3>
      <div className="card border-primary shadow-sm">
        <div className="card-body p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.033198079828!2d-79.03968251655006!3d-8.098096855337165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3df18cf285af%3A0xd593c738492b03b0!2sUniversidad%20Tecnol%C3%B3gica%20del%20Per%C3%BA%20Sede%20Trujillo!5e0!3m2!1sen!2spe!4v1762995160097!5m2!1sen!2spe"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="universidad utp"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</>
  );
}

export default Contacto
