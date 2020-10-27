import React, { useContext } from "react";
import EmpresaContext from "../context/EmpresaContext";

function AboutUs() {
  const { empresa, setEmpresa } = useContext(EmpresaContext);

  return (
    <div>
      <h2>Quienes Somos</h2>
      <p className="mt-3">{empresa.quienes_somos}</p>
    </div>
  );
}

export default AboutUs;
