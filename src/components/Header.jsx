import React, { useContext } from "react";
import EmpresaContext from "../context/EmpresaContext";
import UsuarioContext from "../context/UsuarioContext";

function Header() {
  const { userData, setUserData } = useContext(UsuarioContext);
  const { empresa, setEmpresa } = useContext(EmpresaContext);

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("x-auth-token", "");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <i className="fab fa-apple"></i> {empresa.nombre}
        </a>

        {userData.user ? (
          <div className="d-flex flex-row">
            <a className="btn btn-light mr-5" href="/admin/productos">
              Panel Admin
            </a>
            <div className="my-2 my-lg-0 text-light ml-3 mr-3">
              Welcome {userData.user.username}
            </div>
            <button className="btn btn-light" onClick={logout}>
              Log Out
            </button>
          </div>
        ) : (
          <div className="my-2 my-lg-0">
            <a className="btn btn-light" href="/login">
              Login
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;
