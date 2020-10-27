import Axios from "axios";
import React, { useEffect, useState } from "react";

function ContentAdmin() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    const getMarcas = async () => {
      const { data } = await Axios.get("http://localhost:4000/marcas");
      setMarcas(data.data.marcas);
    };

    getMarcas();
  }, []);

  return (
    <div>
      <h2>Lista de Marcas</h2>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {marcas &&
            marcas.map((marca) => {
              return (
                <tr key={marca.id_marca}>
                  <th scope="row">{marca.id_marca}</th>
                  <td>{marca.nombre}</td>
                  <td>{marca.descripcion}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ContentAdmin;
