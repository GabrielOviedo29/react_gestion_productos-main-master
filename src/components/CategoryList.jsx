import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-productos.netlify.app/api/categorias")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Lista de Categorías</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;