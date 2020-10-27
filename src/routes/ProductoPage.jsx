import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuCategorias from "../components/MenuCategorias";
import ProductsList from "../components/ProductsList";

function ProductoPage() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="row">
        <div className="col-sm-2">
          <MenuCategorias />
        </div>

        <div className="col-sm-10">
          <ProductsList />
        </div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
}

export default ProductoPage;
