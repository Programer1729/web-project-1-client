import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Categorias from "../apis/Categorias";
import Header from "../components/Header";
import MenuAdmin from "../components/MenuAdmin";
import { CategoriasContext } from "../context/CategoriasContext";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Productos from "../apis/Productos";
import { useHistory } from "react-router-dom";

function AddProducto() {
  const history = useHistory();

  const { categorias, setCategorias } = useContext(CategoriasContext);
  const [marcas, setMarcas] = useState([]);

  // Value Inputs
  const [referencia, setReferencia] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [text, setText] = useState("");
  const [valor, setValor] = useState("");
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const response = await Categorias.get("/");
      setCategorias(response.data.data.categorias);
    };

    const getMarcas = async () => {
      const { data } = await Axios.get("http://localhost:4000/marcas");
      setMarcas(data.data.marcas);
    };

    getCategories();
    getMarcas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("x-auth-token");
    const result = await Productos.post(
      "/",
      {
        referencia,
        nombre,
        descripcionCorta: descripcion,
        detalle: text,
        valor: parseFloat(valor),
        categoria: parseInt(categoria),
        marca: parseInt(marca),
        imageUrl: url,
      },
      {
        headers: { "x-auth-token": token },
      }
    );

    console.log(result);
    history.push("/admin/productos");
  };

  return (
    <div>
      <div>
        <Header />
        <div className="d-flex flex-row">
          <div>
            <MenuAdmin />
          </div>
          <div style={{ width: "90%" }}>
            <h2 className="text-center mt-3">Registro de Nuevo Producto</h2>

            <div
              style={{ width: "80%" }}
              className="justify-content-center m-5"
            >
              <form action="">
                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">
                    Referencia
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Referencia"
                      value={referencia}
                      onChange={(e) => setReferencia(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">
                    Nombre
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">
                    Descripcion
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Descripcion"
                      value={descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="exampleFormControlTextarea1"
                    className="col-sm-2 col-form-label"
                  >
                    Detalle
                  </label>
                  <div className="col-sm-10">
                    <CKEditor
                      editor={ClassicEditor}
                      data={text}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setText(data);
                      }}
                    />
                    <p>{text}</p>
                  </div>
                </div>

                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">
                    Valor
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Valor"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    htmlFor="exampleFormControlSelect1"
                    className="col-sm-2 col-form-label"
                  >
                    Marca
                  </label>
                  <div className="col-sm-10">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={marca}
                      onChange={(e) => setMarca(e.target.value)}
                    >
                      {marcas &&
                        marcas.map((marca) => {
                          return (
                            <option key={marca.id_marca} value={marca.id_marca}>
                              {marca.nombre}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>

                <div className="form-group row">
                  <label
                    for="exampleFormControlSelect1"
                    className="col-sm-2 col-form-label"
                  >
                    Categoria
                  </label>
                  <div className="col-sm-10">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                    >
                      {categorias &&
                        categorias.map((categoria) => {
                          return (
                            <option
                              key={categoria.id_categoria}
                              value={categoria.id_categoria}
                            >
                              {categoria.descripcion}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">
                    URL Imagen
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group d-flex justify-content-center mt-5">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducto;
