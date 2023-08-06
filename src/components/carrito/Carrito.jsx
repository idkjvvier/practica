import { Link } from "react-router-dom"
import "./Carrito.css"




export const Carrito = ({ carrito, setCarrito, articulo, setArticulo }) => {
  
  const estadoCarrito = () => {
    carrito === "flotar" ? setCarrito("flotar-0") : setCarrito("flotar")
  }

  let total = articulo.reduce((total, lista) => total + lista.precio*lista.cantidad, 0).toLocaleString()
  
  return (
    <div className={`${carrito}`} >
      <div className="card-title w-100 d-flex justify-content-between p-4">
        <h5>CARRITO DE COMPRAS</h5>
        <strong onClick={estadoCarrito} role="button">Cerrar</strong>
      </div>
      <hr className="mt-1"/>
      <div className="mostrarProductos w-100">
        
        <ListaCarrito articulo={articulo} setArticulo={setArticulo}/>
        
      </div>
      <div className="text-center">
        {articulo.length == 0 ? <strong id="cart-empty">El carrito está vacío</strong> : <p></p>}
      </div>
      <hr />
      <div className="cart-total hidden p-3 d-flex justify-content-between" >
          <h4>SUBTOTAL:</h4>
          <h4 className="text-danger">${total}</h4>
      </div>
      <div>
        <Link to={"/carrito"} className="d-grid gap-2 p-3">
        <button className="btn btn-secondary fw-semibold" type="button">VER CARRITO</button>
        </Link>
        <Link to={"/productos"} className="d-grid gap-2 p-3">
          <button className="btn btn-danger fw-semibold" type="button">FINALIZAR COMPRA</button>
        </Link>
        
      </div>      
      

  </div>
  )
  
}

export const ListaCarrito = ({ articulo, setArticulo }) => {  
  const quitarArticulo = (index) => {
    const updatedCartItems = articulo.filter((_, i) => i !== index);
    setArticulo(updatedCartItems);
  };
  return (    
    articulo.map((item, index) => {
      return (
        <div
          className="d-flex gap-2 justify-content-between align-items-center p-3"
          key={index}
        >
          <p>{item.cantidad}</p> <p>{item.nombre}</p>{" "}
          <section className="d-flex text-center gap-3">
            <p className="precio-producto">{item.precio * item.cantidad}</p>
            <p className="eliminar" role="button" onClick={() => quitarArticulo(index)}>x</p>
          </section>
        </div>
      );
        
    })
    
    
  )
}
