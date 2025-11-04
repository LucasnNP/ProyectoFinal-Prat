import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../presentational/ItemList";
import styles from "./ItemListContainer.module.css";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    // Lógica para obtener los productos, posiblemente filtrados por categoría
    setLoading(true);
    const url = categoryId
      ? `https://fakestoreapi.com/products/category/${categoryId}`
      : `https://fakestoreapi.com/products`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al obtener productos");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setTimeout(() => setLoading(false), 700); // Simulación de un retardo para la carga
      }
    };

    fetchData();
  }, [categoryId]);

  const formattedCategory =
    categoryId
      ?.replace(/%20/g, " ") // reemplazar espacios codificados
      .replace(/^\w/, (c) => c.toUpperCase()) || null; // capitalizar la primera letra

  if (loading) {
    return (
      <div className={styles.container}>
        <p className={styles.loading}>Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.greeting}>{greeting}</h2>
      <h3 className={styles.categoryTitle}>
        {formattedCategory
          ? `Categoría: ${formattedCategory}`
          : "Catálogo de productos"}
      </h3>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
