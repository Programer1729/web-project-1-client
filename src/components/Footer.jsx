import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ContactForm from "./ContactForm";
import "../css/style.css";
import EmpresaContext from "../context/EmpresaContext";
import PopUpContact from "./PopUpContact";

function Footer() {
  const { empresa, setEmpresa } = useContext(EmpresaContext);

  // const handleContactForm = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-pad">
                  <h4>Información de contacto</h4>
                  <ul className="list-unstyled">
                    <li>Email: {empresa.email_contacto}</li>
                    <li>Teléfono: {empresa.telefono_contacto}</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <ul className="social-network social-circle">
                  <li>
                    <a href="/" className="icoFacebook" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="icoLinkedin" title="Linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" className="icoLinkedin" title="Linkedin">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <div className="mt-2">
                  <PopUpContact />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">
                  &copy; Copyright 2020 - Company Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
