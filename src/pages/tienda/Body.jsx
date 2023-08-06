import "./Body.css";
import { Carrusel } from "../../components/ArticuloCarrusel/ArticuloCarrusel";


export const Body = ({ articulo, setArticulo, setCarrito}) => {


  return (
    /* CARRUSEL */
    <main>
      <div id="carouselExample" className="container-fluid carousel slide p-1">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./img/Carrusel/banner-sapolio.jpg"
              className="d-block w-100 mh-50 inline-block"
              style={{minHeight: '10rem', maxHeight: '35rem'}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/Carrusel/productos2.jpg"
              className="d-block w-100 mh-50 inline-block"
              style={{minHeight: '10rem', maxHeight: '35rem'}}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* PRODUCTOS DE LA PAGINA  */}
      <div className="container-fluid container-xxl">
        <Carrusel articulo={articulo} setArticulo={setArticulo} setCarrito={setCarrito} titulo="También te podría interesar"/>

        <Carrusel articulo={articulo} setArticulo={setArticulo} setCarrito={setCarrito} titulo="Novedades"/>
      </div>
    
    </main>
  );
};
