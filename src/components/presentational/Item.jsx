import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";

function Item({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`} className={styles.btn}>
        Ver detalles
      </Link>
    </div>
  );
}

export default Item;
