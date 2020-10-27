import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuCategorias from "../components/MenuCategorias";
import ProductoDetail from "../components/ProductoDetail";

function ProductoDetailPage() {
  return (
    <div>
      <div>
        <Header />
        <Banner />
        <div className="row">
          <div className="col-sm-2">
            <MenuCategorias />
          </div>

          <div className="col-sm-10">
            <ProductoDetail />
          </div>
        </div>
        <div className="mt-3">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ProductoDetailPage;
