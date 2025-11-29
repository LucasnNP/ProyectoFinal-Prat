import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../presentational/ItemDetail";
import styles from "./ItemDetailContainer.module.css";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "items", itemId);
        const snapshot = await getDoc(docRef);

        setItem({ id: snapshot.id, ...snapshot.data() });
      } catch (err) {
        console.error("Error cargando producto:", err);
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
