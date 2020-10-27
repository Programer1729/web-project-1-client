import React from "react";
import { useHistory } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NewsProducts from "../components/NewsProducts";
import SocialMedia from "../components/SocialMedia";
import Header from "./../components/Header";

function Home() {
  let history = useHistory();

  const handleAllProducts = (e) => {
    e.stopPropagation();
    history.push(`/productos`);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Banner />
        <div className="row">
          <div className="mt-5 col">
            <AboutUs />
          </div>
          <div className="mt-5 col">
            <SocialMedia />
          </div>
        </div>
        <div className="mt-5">
          <NewsProducts />
          <button
            className="btn btn-primary mt-5 p-3"
            onClick={handleAllProducts}
          >
            Ver todos los productos
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
