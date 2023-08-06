import { listaProductos } from "../../App"



export const Articulo = ({ articulo, setArticulo, setCarrito }) => {
    const agregarCarrito = (item) => {
        const existeItemIndex = articulo.findIndex((lista) => lista.id === item.id);

        if (existeItemIndex !== -1) {
            const nuevosArticulos = [...articulo];
            nuevosArticulos[existeItemIndex].cantidad += 1;
            setArticulo(nuevosArticulos);
        } else {
            setArticulo([...articulo, { ...item, cantidad: 1 }]);
        }
    };
    return  (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 d-flex">
            {/* Aqui se recorre la lista */}
            {listaProductos.map((item, i) => (
                <div className="p-1 d-flex flex-column justify-content-between " key={i} style={{ width: '10rem' }}>

                    <a className='order-articulo' >
                        <div >
                            <img
                                src={item.imagen}
                                className="card-img-top"
                                role="button"
                                alt={item.marca}
                                style={{
                                    maxWidth: "135px"
                                }}
                            />

                            <div className="text-start d-flex flex-column justify-content-between ">
                                <h5 className="card-title w-auto mb-1" style={{ fontSize: '0.7rem' }}>{item.marca}</h5>
                                <h5 className="card-title w-auto mb-3" style={{ fontSize: '0.8rem', color: "black" }}>{item.nombre}</h5>
                                <p className="fw-bold w-auto text-secondary m-0">$ {item.precio}</p>
                            </div>
                        </div>
                    </a>
                    <div className="btn-articulo text-center" >
                        <button
                            className=" btn btn-add-cart fw-bold rounded-pill w-100"
                            onClick={() => {
                                agregarCarrito(item);
                                setCarrito("flotar-0");
                            }}
                        >
                            Ver producto
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}