import React from "react";
import "../css/simple-sidebar.css";

function MenuAdmin() {
  return (
    <div>
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="list-group list-group-flush">
          <a
            href="/admin/marcas"
            className="list-group-item list-group-item-action bg-light"
          >
            Marcas
          </a>
          <a
            href="/admin/categorias"
            className="list-group-item list-group-item-action bg-light"
          >
            Categorias
          </a>
          <a
            href="/admin/productos"
            className="list-group-item list-group-item-action bg-light"
          >
            Productos
          </a>
          <a
            href="/admin/empresa/update"
            className="list-group-item list-group-item-action bg-light"
          >
            Datos de la empresa
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuAdmin;
