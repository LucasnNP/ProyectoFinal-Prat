import ItemCount from "../layout/ItemCount.jsx";
import styles from "./ItemDetail.module.css";

function ItemDetail({ item }) {
  if (!item) return <p>Cargando producto...</p>;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.imageContainer}>
        <img
          src={item.image}
          alt={item.title}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{item.title}</h2>
        <p className={styles.category}>Categoría: {item.category}</p>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>${item.price.toFixed(2)}</p>

        <ItemCount stock={10} initial={1} />
      </div>
    </div>
  );
}

export default ItemDetail;
