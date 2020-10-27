import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import EmpresaContext from "../context/EmpresaContext";

function DetailInfo(props) {
  const history = useHistory();
  const { empresa } = useContext(EmpresaContext);

  const [nombre, setNombre] = useState();
  const [quienesSomos, setQuienesSomos] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");

  useEffect(() => {
    const fecthData = async () => {
      const { data } = await Axios.get("http://localhost:4000/empresa");
      setNombre(data.data.empresa.nombre);
      setQuienesSomos(data.data.empresa.quienes_somos);
      setEmail(data.data.empresa.email_contacto);
      setDireccion(data.data.empresa.direccion);
      setTelefono(data.data.empresa.telefono_contacto);
      setFacebook(data.data.empresa.facebook);
      setTwitter(data.data.empresa.twitter);
      setInstagram(data.data.empresa.instagram);
    };
    fecthData();
  }, []);

  const handleSubmit = async (e) => {
    let token = localStorage.getItem("x-auth-token");
    const result = await Axios.put(
      "http://localhost:4000/empresa",
      {
        name: nombre,
        quienesSomos,
        email,
        direccion,
        telefono,
        facebook,
        twitter,
        instagram,
      },
      {
        headers: { "x-auth-token": token },
      }
    );

    console.log(result);

    history.push("/");
  };

  return (
    <div>
      <h2 className="text-center mt-3">Gestion de informacion de la empresa</h2>
      <div style={{ width: "80%" }} className="justify-content-center m-5">
        <form action="">
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Nombre
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="col-sm-2 col-form-label"
            >
              Quienes Somos
            </label>
            <div className="col-sm-10">
              <textarea
                value={quienesSomos}
                onChange={(e) => setQuienesSomos(e.target.value)}
                // placeholder={empresa.quienes_somos}
                style={{ width: "100%" }}
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email Contacto
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                // placeholder={empresa.email_contacto}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Direccion
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                // placeholder={empresa.direccion}
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Telefono Contacto
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                // placeholder={empresa.telefono_contacto}
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Facebook
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                // placeholder={empresa.facebook}
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Twitter
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                // placeholder={empresa.twitter}
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Instagram
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputEmail3"
                // placeholder={empresa.instagram}
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
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
  );
}

export default DetailInfo;
