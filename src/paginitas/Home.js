import React from "react";

const Home = () => {
  return (
    <div className=" container mt-5 ">
      {/* Carrusel arriba */}
      <div
        id="carruselPrincipal"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img1.jpg" className="d-block w-100" alt="Img1" />
          </div>
          <div className="carousel-item">
            <img src="/img1.jpg" className="d-block w-100" alt="Img2" />
          </div>
          <div className="carousel-item">
            <img src="/img1.jpg" className="d-block w-100" alt="Img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carruselPrincipal"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carruselPrincipal"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Visión y Misión en vertical */}
      <div className="row mb-5">
        <div className="col-12 mb-4">
          {/* Full width, vertical */}
          <div className="card">
            <div className="card-body text-center">
              <h3 className="card-title">Nuestra Visión</h3>
              <p className="card-text">
                Ser líderes en innovación digital para 2030, conectando el mundo
                con soluciones sostenibles y accesibles para todos.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          {/* Full width, debajo de Visión */}
          <div className="card">
            <div className="card-body text-center">
              <h3 className="card-title">Nuestra Misión</h3>
              <p className="card-text">
                Ayudar a empresas y personas a crecer mediante herramientas
                tecnológicas simples, eficientes y éticas, fomentando la
                inclusión digital.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Acordeón abajo */}
      <div className="row">
        <div className="col-12">
          <h3 className="mb-4 text-center">Preguntas Frecuentes</h3>
          <div className="accordion" id="acordeonHome">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ¿Qué hacemos en Mi Empresa Cool?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#acordeonHome"
              >
                <div className="accordion-body">
                  Desarrollamos apps web y móviles personalizadas, con enfoque
                  en React y Bootstrap para resultados rápidos y responsive.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ¿Por qué elegirnos?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#acordeonHome"
              >
                <div className="accordion-body">
                  Porque combinamos experiencia con pasión, entregamos a tiempo
                  y ofrecemos soporte post-lanzamiento ilimitado.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ¿Cómo contactarnos?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#acordeonHome"
              >
                <div className="accordion-body">
                  Usa nuestro formulario en la página de Contacto o envía un
                  email a info@miempresacool.com.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
