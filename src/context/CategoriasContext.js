import React, { useState, createContext } from "react";

export const CategoriasContext = createContext();

export const CategoriasContextProvider = (props) => {
  const [categorias, setCategorias] = useState([]);

  return (
    <CategoriasContext.Provider value={{ categorias, setCategorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};
