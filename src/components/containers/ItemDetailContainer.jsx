import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../presentational/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Simulamos un pequeño retardo con Promise y fetch a FakeStoreAPI
    const fetchItem = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${itemId}`
        );
        if (!response.ok) throw new Error("Error al obtener el producto");
        const data = await response.json();

        await new Promise((resolve) => setTimeout(resolve, 800));
        setItem(data);
      } catch (error) {
        console.error("Error cargando producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  if (loading) {
    return <p className={styles.loading}>Cargando producto...</p>;
  }

  if (!item) {
    return <p className={styles.error}>No se encontró el producto.</p>;
  }

  return (
    <div className={styles.container}>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
