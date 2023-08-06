
import { Link } from 'react-router-dom'
import './ArticuloCarrito.css'

export const ArticuloCarrito = ({ articulo , setArticulo}) => {
    return articulo.length > 0 ? <SiArticulos articulo={articulo} setArticulo={setArticulo}/> : <NoArticulos />
}

const NoArticulos = () => {
    return (
        <main className="flex-grow-1 d-flex justify-content-center align-items-center" style={{backgroundColor: "#EEEEEE"}}>
            <div className="item-info container text-center p-5 w-auto">
                <h1>Tu carro está vacío</h1>
                <p>Tenemos miles de ofertas y oportunidades únicas, ¿te las vas a perder?</p>
                <Link to={'/productos'}>
                    <button className="w-auto p-2 bg-red bg-danger w-25 border rounded-pill">Ver productos</button>
                </Link>
                
            </div>
        </main>
    )
}

const SiArticulos = ({ articulo, setArticulo }) => {
    const modificarCarrito = (item, i) => {
      const existeItemIndex = articulo.findIndex(
        (lista) => lista.id === item.id
      );
      if (existeItemIndex !== -1 && i == 1) {
        const nuevosArticulos = [...articulo];
        nuevosArticulos[existeItemIndex].cantidad += 1;
        setArticulo(nuevosArticulos);
      }
      if (existeItemIndex !== -1 && i == -1 && item.cantidad >= 2) {
        const nuevosArticulos = [...articulo];
        nuevosArticulos[existeItemIndex].cantidad -= 1;
        setArticulo(nuevosArticulos);
      }
    };
    const quitarArticulo = (index) => {
        const updatedCartItems = articulo.filter((_, i) => i !== index);
        setArticulo(updatedCartItems);
    };
    let total = articulo.reduce((total, lista) => total + lista.precio*lista.cantidad, 0).toLocaleString()
    const totalProductos = articulo.reduce((total, item) => total + item.cantidad, 0);
    return (
        <main className=" flex-grow-1 d-flex justify-content-center" style={{backgroundColor: "#EEEEEE"}}>
            <div className='d-flex w-100 container'>
                <div className="w-75 container gap-3 d-flex flex-column p-3">
                    <h3>Carro <span className='fs-5'>({articulo.length} productos)</span></h3>
                    {
                        articulo.map((item, index) => {
                            return (

                                <div className='d-flex justify-content-end'>
                                    
                                    <div key={index} className="item-info container text-center p-3 d-flex justify-content-around">
  

                                        <div>
                                            <img src={item.imagen} alt={item.nombre} style={{ width: '100px' }} />
                                        </div>
                                        <section className="d-flex justify-content-between flex-grow-1 m-2">
                                            <div className="d-flex flex-column w-25 mw-25 ">
                                                <a className='item-nombre'>{item.nombre}</a>
                                                <a className="item-marca">{item.marca}</a>
                                                <p className='item-vendido'>Vendido por {item.vendido}</p>
                                            </div>
                                            <div >
                                                <p className='fs-5'>${item.precio.toLocaleString()}</p>
                                            </div>
                                            <div className=" d-flex flex-column text-center align-items-center justify-content-end">

                                                <div className="d-flex gap-4">
                                                    <button className="btn-substract btn-danger" onClick={() => { modificarCarrito(item, -1) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                        </svg>
                                                    </button>
                                                    <span>{item.cantidad}</span>
                                                    <button className="btn-add" onClick={() => { modificarCarrito(item, 1) }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <small className="text-muted">
                                                    Máximo 20 unidades
                                                </small>
                                            </div>
                                        </section>
                                        <div className='h-100'>
                                            <div class="dropdown d-flex">
                                                <button class="btn btn-light rounded-pill   " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    ...
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <small class="dropdown-item" onClick={() =>  quitarArticulo(index)}>Eliminar</small>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            );
                        })
                    }
                </div>
                <div className="w-50 gap-3 d-flex flex-column p-3" >
                    <h3>Resumen de la compra</h3>
                    <div className="item-info p-3">
                        <h6 className='text-secondary' style={{fontSize: '14px'}}>Envio a domicilio no incluido</h6>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold mb-1'>Productos ({totalProductos})</p>
                            <p className='fw-bold mb-1' style={{fontSize: '13px'}}>$ {total}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold'>Total: </p>
                            <p className='fw-bold'>$ {total}</p>
                        </div>
                        <div className='text-center'>
                            <button className='btn-end fw-bold'>Finalizar compra</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}