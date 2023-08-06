
export const Contacto = () => {
  return (
      <main className="container p-3 flex-grow-1">
        <div className="d-flex flex-column bd-highlight mb-3 align-items-center">
          <div>
            <h1>Contáctanos</h1>
            <hr className="w-100" />
          </div>
          <br />
          <div className="d-flex flex-column justify-content-center w-50">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input
                type="email"
                className="form-control"
                id="nombre"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido:
              </label>
              <input
                type="email"
                className="form-control"
                id="apellido"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="productos" className="form-label">
                Productos:
              </label>
              <select id="productos" className="form-control">
                <option value="producto1">Lavaloza</option>
                <option value="producto2">Detergente</option>
                <option value="producto3">Escobillas</option>
                <option value="producto3">Escobillones</option>
                <option value="producto3">Bolsa de basura</option>
                <option value="producto3">Limpia pisos</option>
                <option value="producto3">Traperos</option>
              </select>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Comentario
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </main>
  );
};
