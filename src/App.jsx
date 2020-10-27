import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./routes/Home";
import ProductoPage from "./routes/ProductoPage";
import ProductoDetailPage from "./routes/ProductoDetailPage";
import AdminPage from "./routes/AdminPage";
import AddProducto from "./routes/AddProducto";
import UpdateInfo from "./routes/UpdateInfo";
import { ProductosContextProvider } from "./context/ProductosContext";
import { CategoriasContextProvider } from "./context/CategoriasContext";
import LoginForm from "./routes/LoginForm";
import UsuarioContext from "./context/UsuarioContext";
import Axios from "axios";
import EmpresaContext from "./context/EmpresaContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const [empresa, setEmpresa] = useState({});

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("x-auth-token");
      if (token === null) {
        localStorage.setItem("x-auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        "http://localhost:4000/tokenIsValid",
        null,
        {
          headers: { "x-auth-token": token },
        }
      );
      if (tokenRes.data.isValid) {
        const user = tokenRes.data.user;
        setUserData({
          token,
          user,
        });
      }
    };

    const empresaInfo = async () => {
      const response = await Axios.get("http://localhost:4000/empresa");
      const empresa = response.data.data.empresa;
      setEmpresa(empresa);
    };

    checkLoggedIn();

    empresaInfo();
  }, []);

  return (
    <ProductosContextProvider>
      <CategoriasContextProvider>
        <UsuarioContext.Provider value={{ userData, setUserData }}>
          <EmpresaContext.Provider value={{ empresa, setEmpresa }}>
            <div>
              <Router>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/productos/categoria/:idCategoria"
                    component={ProductoPage}
                  />
                  <Route exact path="/productos" component={ProductoPage} />
                  <Route
                    exact
                    path="/productos/:idProducto"
                    component={ProductoDetailPage}
                  />
                  <Route exact path="/login" component={LoginForm} />

                  <ProtectedRoute
                    exact
                    path="/admin/productos"
                    component={AdminPage}
                  />
                  <ProtectedRoute
                    exact
                    path="/admin/categorias"
                    component={AdminPage}
                  />
                  <ProtectedRoute
                    exact
                    path="/admin/marcas"
                    component={AdminPage}
                  />
                  <ProtectedRoute
                    exact
                    path="/admin/productos/add"
                    component={AddProducto}
                  />
                  <ProtectedRoute
                    exact
                    path="/admin/empresa/update"
                    component={UpdateInfo}
                  />
                  {/* <Redirect to="/" /> */}
                </Switch>
              </Router>
            </div>
          </EmpresaContext.Provider>
        </UsuarioContext.Provider>
      </CategoriasContextProvider>
    </ProductosContextProvider>
  );
};

export default App;
