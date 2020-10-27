import React, { useEffect, useContext } from "react";
import Productos from "../apis/Productos";
import { ProductosContext } from "../context/ProductosContext";

function ProductosTable() {
  const { productos, setProductos } = useContext(ProductosContext);

  useEffect(() => {
    const getProductos = async () => {
      const response = await Productos.get("/");
      setProductos(response.data.data.productos);
    };
    getProductos();
  }, []);

  return (
    <div>
      <h2 className="text-center mt-3">Productos Table</h2>
      <div className="float-right">
        <a className="btn btn-dark mr-5 mb-3" href="/admin/productos/add">
          Agregar producto
        </a>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Referencia</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Valor</th>
            <th scope="col">Marca</th>
            <th scope="col">Categoria</th>
          </tr>
        </thead>
        <tbody>
          {productos &&
            productos.map((producto) => {
              return (
                <tr key={producto.id_poducto}>
                  <th scope="row">{producto.referencia}</th>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion_corta}</td>
                  <td>${producto.valor}</td>
                  <td>{producto.marca}</td>
                  <td>{producto.categoria}</td>
                  <td>
                    <a
                      href={`/productos/${producto.id_producto}`}
                      className="btn btn-primary"
                    >
                      Ver detalles
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductosTable;
