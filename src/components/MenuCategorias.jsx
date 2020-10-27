import React, { useContext, useEffect } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import Categorias from "../apis/Categorias";

function MenuCategorias() {
  const { categorias, setCategorias } = useContext(CategoriasContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Categorias.get("/");
        setCategorias(response.data.data.categorias);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3 className="mt-3">Categorias</h3>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="sidebar-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="/productos">
                <span data-feather="home"></span>
                Todos los productos
                <span className="sr-only">(current)</span>
              </a>
            </li>

            {categorias &&
              categorias.map((categoria) => {
                return (
                  <li className="nav-item" key={categoria.id_categoria}>
                    <a
                      className="nav-link active"
                      href={`/productos/categoria/${categoria.id_categoria}`}
                    >
                      <span data-feather="home"></span>
                      {categoria.descripcion}
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MenuCategorias;
