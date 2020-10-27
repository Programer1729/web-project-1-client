import React from "react";
import DetailInfo from "../components/DetailInfo";
import EmpresaDetail from "../components/EmpresaDetail";
import Header from "../components/Header";
import MenuAdmin from "../components/MenuAdmin";

function UpdateInfo(props) {
  return (
    <div>
      <Header />
      <div className="d-flex flex-row">
        <div>
          <MenuAdmin />
        </div>
        <div style={{ width: "90%" }}>
          <DetailInfo />
        </div>
      </div>
    </div>
  );
}

export default UpdateInfo;
