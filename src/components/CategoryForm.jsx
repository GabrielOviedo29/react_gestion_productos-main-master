import React, { useState } from "react";
import axios from "axios";

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState("");

  const handleCreateCategory = () => {
    
    axios
      .post("https://backend-productos.netlify.app/api/categorias", {
        nombre: categoryName,
      })
      .then((response) => {
        console.log(response.data);
        
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Formulario de Categorías</h2>
      <label htmlFor="categoryName">Nombre de la Categoría:</label>
      <input
        type="text"
        id="categoryName"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <button onClick={handleCreateCategory}>Crear Categoría</button>
    </div>
  );
};

export default CategoryForm;