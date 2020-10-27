import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Usuario from "../apis/Usuario";
import Banner from "../components/Banner";
import ErrorNotice from "../components/ErrorNotice";
import Header from "../components/Header";
import UsuarioContext from "../context/UsuarioContext";

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UsuarioContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Usuario.post("/", loginUser);
      console.log(loginRes);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.usuario,
      });
      localStorage.setItem("x-auth-token", loginRes.data.token);
      history.push("/");
    } catch (error) {
      error.response.data.msg && setError(error.response.data.msg);
    }
  };

  return (
    <div>
      <Header />

      <div className="container">
        {error && (
          <ErrorNotice message={error} clearError={() => setError(undefined)} />
        )}

        <form className="mt-5" onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
