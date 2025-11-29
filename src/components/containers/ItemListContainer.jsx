import { getDocs, collection, query, where, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../presentational/ItemList";
import styles from "./ItemListContainer.module.css";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);

        const productsRef = collection(db, "items");
        const q = categoryId
          ? query(productsRef, where("category", "==", categoryId))
          : productsRef;

        const snapshot = await getDocs(q);

        const newItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(newItems);
      } catch (err) {
        console.error("Error cargando productos:", err);
      } finally {
        setLoading(false);
      }
    };
    console.log("Consultando categoría:", categoryId);
    fetchItems();
  }, [categoryId]);

  if (loading) return <p className={styles.loading}>Cargando productos...</p>;
  console.log("categoryId URL:", categoryId);
  return (
    <div className={styles.container}>
      <h2 className={styles.greeting}>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
