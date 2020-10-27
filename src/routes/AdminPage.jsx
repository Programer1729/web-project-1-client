import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import MenuAdmin from "../components/MenuAdmin";
import MarcasTable from "../components/MarcasTable";
import CategoriasTable from "../components/CategoriasTable";
import ProductosTable from "../components/ProductosTable";

export default class AdminPage extends Component {
  state = {
    action: "",
  };

  componentDidMount() {
    const url = window.location.pathname;
    const action = url.split("/")[2];
    this.setState({ action });
  }

  render() {
    const { action } = this.state;
    let table;

    if (action === "marcas") table = <MarcasTable />;
    else if (action === "categorias") table = <CategoriasTable />;
    else table = <ProductosTable />;

    return (
      <div>
        <Header />
        <div className="d-flex flex-row">
          <div>
            <MenuAdmin />
          </div>
          <div style={{ width: "90%" }}>{table}</div>
        </div>
      </div>
    );
  }
}
