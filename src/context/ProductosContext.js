import React, { useState, createContext } from "react";

export const ProductosContext = createContext();

export const ProductosContextProvider = (props) => {
  const [productos, setProductos] = useState([]);

  return (
    <ProductosContext.Provider value={{ productos, setProductos }}>
      {props.children}
    </ProductosContext.Provider>
  );
};
