import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Productos from "../apis/Productos";
import { ProductosContext } from "../context/ProductosContext";

function ProductsList() {
  const history = useHistory();
  const { idCategoria } = useParams();
  const { productos, setProductos } = useContext(ProductosContext);
  //   const [word, setWord] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response =
          idCategoria != null
            ? await Productos.get(`/categorias/${idCategoria}`)
            : await Productos.get("/");
        setProductos(response.data.data.productos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDetail = (e, idProducto) => {
    e.stopPropagation();
    history.replace(`/productos/${idProducto}`);
  };

  //   const handleChange = (e) => {
  //     let oldList = [...productos];

  //     if (e === "") {
  //       setProductos(productos);
  //     } else {
  //       let newList = [];
  //       setWord(e);
  //       newList = oldList.filter((producto) => producto.nombre.includes(word));
  //       setProductos(newList);
  //     }
  //   };

  return (
    <div>
      <h2 className="mb-3">Listado de productos</h2>
      {/* <input
        className="form-control mt-3 mb-3"
        type="text"
        placeholder="Search"
        style={{ width: "50%" }}
        // onChange={(e) => handleChange(e.target.value)}
      /> */}
      <div className="row">
        {productos &&
          productos.map((producto) => {
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
                    onClick={(e) => handleDetail(e, producto.id_producto)}
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

export default ProductsList;
