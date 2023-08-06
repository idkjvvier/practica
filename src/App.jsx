
import { Body } from './pages/tienda/Body.jsx'
import { Nosotros } from './pages/nosotros/Nosotros.jsx'
import { NotFound } from './pages/error404/NotFound.jsx'
import { Contacto } from './pages/contacto/Contacto.jsx'
import { ArticuloCarrito } from './pages/ArticuloCarrito/ArticuloCarrito.jsx'
import { Productos } from './pages/productos/Productos.jsx'

import { Header } from './components/header/Header.jsx'
import { Carrito } from './components/carrito/Carrito.jsx'
import { Footer } from './components/footer/Footer.jsx'


import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

export function App() {

  const [articulo, setArticulo] = useState([])
  const [carrito, setCarrito] = useState("flotar")
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
  return (

      <div className="d-flex flex-column min-vh-100">
        <Header carrito={carrito} setCarrito={setCarrito}/>
        <Carrito carrito={carrito} setCarrito={setCarrito} articulo={articulo} setArticulo={setArticulo}/>
          <Routes>
            <Route path='/' element={<Body articulo={articulo} setArticulo={setArticulo} setCarrito={setCarrito}/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/productos' element={<Productos articulo={articulo} setArticulo={setArticulo} setCarrito={setCarrito}/>}/>
            <Route path='/carrito' element={<ArticuloCarrito articulo={articulo} setArticulo={setArticulo}/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </div>

  )
}



export let listaProductos = [
  {
    id: 1,
    nombre: "Lavaloza Quix 750 ml",
    precio: 2500,
    imagen: "./img/Productos/lava-loza.png",
    marca: "Quix",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Detergente Liquido",
    precio: 2200,
    imagen: "./img/Productos/Detergente-liquido.jpg",
    marca: "SuperClean",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Escobilla",
    precio: 1000,
    imagen: "./img/Productos/escobilla.jpg",
    marca: "BroomMaster",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Escobillon",
    precio: 1500,
    imagen: "./img/Productos/escobillon.jpg",
    marca: "EasySweep",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Bolsa de basura 5x3",
    precio: 500,
    imagen: "./img/Productos/bolsa-de-basura-jpg.png",
    marca: "CleanBag",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Limpia pisos",
    precio: 6500,
    imagen: "./img/Productos/limpia-pisos.jpg",
    marca: "ShinyFloors",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Trapero",
    precio: 3500,
    imagen: "./img/Productos/trapero.jpg",
    marca: "DustMaster",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 1,
    nombre: "Lavaloza Quix 750 ml",
    precio: 2500,
    imagen: "./img/Productos/lava-loza.png",
    marca: "Quix",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Detergente Liquido",
    precio: 2200,
    imagen: "./img/Productos/Detergente-liquido.jpg",
    marca: "SuperClean",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Escobilla",
    precio: 1000,
    imagen: "./img/Productos/escobilla.jpg",
    marca: "BroomMaster",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Escobillon",
    precio: 1500,
    imagen: "./img/Productos/escobillon.jpg",
    marca: "EasySweep",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Bolsa de basura 5x3",
    precio: 500,
    imagen: "./img/Productos/bolsa-de-basura-jpg.png",
    marca: "CleanBag",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "Limpia pisos",
    precio: 6500,
    imagen: "./img/Productos/limpia-pisos.jpg",
    marca: "ShinyFloors",
    vendido: "3B",
    cantidad: 1,
  },
  {
    id: 7,
    nombre: "Trapero",
    precio: 3500,
    imagen: "./img/Productos/trapero.jpg",
    marca: "DustMaster",
    vendido: "3B",
    cantidad: 1,
  },


];
