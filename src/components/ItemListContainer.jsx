import styles from "./ItemListContainer.module.css";

function ItemListContainer({ greeting }) {
  return (
    <div className={styles.container}>
      <h2>{greeting}</h2>
      <div className={styles.itemList}>
        {/* Aquí se renderizarán los productos */}
      </div>
    </div>
  );
}

export default ItemListContainer;
