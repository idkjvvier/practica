import "./Header.css";
import { Link } from "react-router-dom";
export const Header = ({ carrito , setCarrito }) => {
  return (
    <header >
      <section className="header-section p-3 container">
        <span className="header-titulo">
          <h3>BIENVENIDO A TIENDA 3B</h3>
        </span>
        <span className="header-carrito">
          <nav className="navbar">
            <div className="container-fluid gap-3">
              <a id="iniciarSesion">
                ¿Tienes cuenta?
              </a>
              <form className="d-flex gap-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
              </form>
              <img
                  className="mostrarAside p-1"
                  src="./img/Iconos/cart.svg"
                  role="button"
                  alt="carrito"
                  height={40}
                  onClick={() => {    
                    const newState = carrito === "flotar-0" ? "flotar" : "flotar-0";
                    setCarrito(newState)
                }}
                >
                </img>
            </div>
          </nav>
        </span>
      </section>
      <nav className=" navbar text-center d-flex gap-3 p-3 text-dark bg-white w-100 justify-content-center"  >
        <Link className="navlinks" to="/">Inicio</Link>
        <Link className="navlinks" to="nosotros">Quienes Somos</Link>
        <Link className="navlinks" to="productos">Productos</Link>
        <Link className="navlinks" to="contacto">Contacto</Link>
      </nav>
    </header>
  );
};
