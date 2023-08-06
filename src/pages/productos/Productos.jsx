import './Productos.css'
import { Articulo } from '../../components/CardArticulo/Articulo';
export const Productos = ({ articulo, setArticulo, setCarrito }) => {


    return (
      <main className="container p-3">
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="text-center">
            <article>
              <h1>Lista de productos</h1>
            </article>
            {/* SE MUESTRA LA LISTA DE ARTICULOS */}
            <Articulo articulo={articulo} setArticulo={setArticulo} setCarrito={setCarrito}/>
          </div>
        </div>
      </main>

      
      
    )
}


