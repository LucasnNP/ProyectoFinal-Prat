import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";

function ItemList({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.id} className={styles.card}>
          <img
            src={item.image}
            alt={item.title}
            className={styles.image}
            loading="lazy"
          />
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.price}>${item.price.toFixed(2)}</p>
          <Link to={`/item/${item.id}`} className={styles.btn}>
            Ver detalles
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
