import React, { useContext, useEffect } from "react";
import Productos from "../apis/Productos";
import { ProductosContext } from "../context/ProductosContext";
import ReactDOM from "react-dom";
import Modal from "./Modal";

function NewsProducts() {
  const { productos, setProductos } = useContext(ProductosContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Productos.get("/");
        setProductos(response.data.data.productos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const newsProducts = productos.slice(productos.length - 3);

  const handleModal = (e, idProducto) => {
    e.stopPropagation();
    const producto = newsProducts.find(
      (element) => element.id_producto === idProducto
    );
    console.log(producto);
    ReactDOM.render(
      <Modal producto={producto} />,
      document.getElementById("modal")
    );
  };

  return (
    <div>
      <h2 className="mb-3">Novedades</h2>
      <div className="row">
        {newsProducts &&
          newsProducts.map((producto) => {
            return (
              <div
                className="card col-lg-4"
                style={{ width: "18rem" }}
                key={producto.id_producto}
              >
                <img
                  className="card-img-top"
                  src={producto.image_url}
                  alt="Card cap"
                  style={{ height: "20rem", width: "22rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion_corta}</p>
                  <button
                    href="/"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={(e) => handleModal(e, producto.id_producto)}
                  >
                    Ver mas
                  </button>
                  <div id="modal"></div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default NewsProducts;
