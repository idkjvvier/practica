import { listaProductos } from "../../App";

export const Carrusel = ({ articulo, setArticulo, setCarrito, titulo="Undefined" }) => {
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
    const gruposProductos = [];
    for (let i = 0; i < listaProductos.length; i += 5) {
      gruposProductos.push(listaProductos.slice(i, i + 5));
    }
  
    return (
      <>    
      <div>
        <h4>{titulo}</h4>
        <hr />
      </div>
      <div id="carouselExampleIndicators" className="carousel slide d-flex p-5">
      <div className="carousel-indicators">
  {gruposProductos.map((grupo, index) => (
    <button
      key={index}
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={index}
      className={index === 0 ? "active" : ""}
      aria-current="true"
      aria-label={`Slide ${index + 1}`}
      style={{
        width: "5px",
        height: "5px",
        border: "2px solid black",
        borderRadius: "50%",
        margin: "5px",
      }}
    ></button>
  ))}
</div>
        <div className="carousel-inner">
          {gruposProductos.map((grupo, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 d-flex justify-content-center">
                {grupo.map((item, i) => (
                  <div
                    className="p-1 d-flex flex-column justify-content-between"
                    key={i}
                    style={{ width: '10rem' }}
                    
                  >
                    <a
                      className='order-articulo'
                    >
                      <div>
                        <img
                          src={item.imagen}
                          className="card-img-top"
                          role="button"
                          alt={item.marca}
                          style={{
                            maxWidth: "135px"
                          }}
                        />
                        <div className="text-start d-flex flex-column justify-content-between">
                          <h5 className="card-title w-auto mb-1" style={{ fontSize: '0.7rem' }}>{item.marca}</h5>
                          <h5 className="card-title w-auto mb-3" style={{ fontSize: '0.8rem', color: "black" }}>{item.nombre}</h5>
                          <p className="fw-bold w-auto text-secondary m-0">$ {item.precio}</p>
                        </div>
                      </div>
                    </a>
                    <div className="btn-articulo text-center">
                      <button
                        className="btn btn-add-cart fw-bold rounded-pill w-100"
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
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ backgroundColor: "black" }}></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ backgroundColor: "black" }}></span>
        </button>
      </div>
      </>
    );
  }