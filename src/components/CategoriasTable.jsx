import React, { useContext, useEffect } from "react";
import Categorias from "../apis/Categorias";
import { CategoriasContext } from "../context/CategoriasContext";

function CategoriasTable() {
  const { categorias, setCategorias } = useContext(CategoriasContext);

  useEffect(() => {
    const getCategories = async () => {
      const response = await Categorias.get("/");
      setCategorias(response.data.data.categorias);
    };
    getCategories();
  }, []);

  return (
    <div>
      <h2>Lista de Categorias</h2>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {categorias &&
            categorias.map((categoria) => {
              return (
                <tr key={categoria.id_categoria}>
                  <th scope="row">{categoria.id_categoria}</th>
                  <td>{categoria.descripcion}</td>
                  <td>{categoria.estado}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default CategoriasTable;
