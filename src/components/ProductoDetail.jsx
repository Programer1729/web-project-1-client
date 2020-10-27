import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Productos from "../apis/Productos";
import { ProductosContext } from "../context/ProductosContext";
import parse from "html-react-parser";

function ProductoDetail() {
  const { idProducto } = useParams();
  const { productos, setProductos } = useContext(ProductosContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Productos.get(`/${idProducto}`);
        setProductos(response.data.data.productos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mt-3">Detalle del producto</h1>
      <div className="row">
        <div className="d-inline-flex p-2">
          <img
            src={productos.image_url}
            alt=""
            style={{ width: "350px", height: "350px" }}
          />
        </div>
        <div className="mt-5">
          <h5>{productos.categoria}</h5>
          <div className="mt-4">
            <h3>{productos.nombre}</h3>
            <h4>${productos.valor}</h4>
            <h5>{productos.descripcion_corta}</h5>
          </div>
        </div>
      </div>
      <div>
        <p>{parse(String(productos.detalle))}</p>
      </div>
    </div>
  );
}

export default ProductoDetail;
