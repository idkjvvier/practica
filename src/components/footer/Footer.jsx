import "./Footer.css"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="f-res d-flex justify-content-around p-3 mt-auto flex-grow-1">
        <div className="p-1">
          <h3>Nuestras redes</h3>
          <span className="d-flex justify-content-center gap-4">
            <a href="https://www.instagram.com/idk.jvvier" target="_blank">
              <img src="./img/Iconos/instagram.svg" alt="" width={40}/>
            </a>
            <a href="#" target="_blank">
              <img src="./img/Iconos/facebook.svg" alt="" width={40}/>
            </a>
            <a href="#" target="_blank">
            <img src="./img/Iconos/twitter.svg" alt="" width={40}/>
            </a>
          </span>
          
        </div>
        <div className="footer-navegacion p-1 text-center">
          <h3>Tienda 3B</h3>
          <nav className="footer-nav navbar d-flex gap-3">
            <Link to="/">Inicio</Link>
            <Link to="nosotros" >Quienes Somos</Link>
            <Link to="productos">Productos</Link>
            <Link to="contacto">Contacto</Link>
          </nav>
        </div>
        <div className="footer-pagos p-1">
          <h3>Formas de pago</h3>
          <img className="" src="./img/Footer/WebPay3.png" alt="webpay-img" />
        </div>
      </div>
      <div className="w-100 text-center" style={{backgroundColor: "#343A40"}}>
        <strong> &copy;  Javier Madariaga</strong>
      </div>
    </footer>
  );
};
