import Axios from "axios";
import React, { Component } from "react";
import EmpresaContext from "../context/EmpresaContext";

export default class EmpresaDetail extends Component {
  state = {
    nombre: "",
    quienesSomos: "",
    email: "",
    direccion: "",
    telefono: "",
    facebook: "",
    twitter: "",
    instagram: "",
  };

  static empresa = EmpresaContext;

  async componentDidMount() {
    const { data } = await Axios.get("http://localhost:4000/empresa");
    console.log(data.data);
    this.setState({
      nombre: data.data.nombre,
      quienesSomos: data.data.quienes_somos,
      email: data.data.email_contacto,
      direccion: data.data.direccion,
      telefono: data.data.telefono_contacto,
      facebook: data.data.facebook,
      twitter: data.data.twitter,
      instagram: data.data.instagram,
    });
  }

  render() {
    return <div>{}</div>;
  }
}
