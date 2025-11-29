import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import ItemCount from "../layout/ItemCount.jsx";
import styles from "./ItemDetail.module.css";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  if (!item) return <p>Cargando producto...</p>;

  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart(item, quantity);
    setAdded(true);
  };

  return (
    <div className={styles.detailContainer}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <div className={styles.info}>
        <h2>{item.title}</h2>
        <p className={styles.description}>{item.description}</p>
        <p className={styles.price}>${item.price}</p>

        {!added ? (
          <ItemCount stock={10} initial={1} onAdd={handleAdd} />
        ) : (
          <Link to="/cart" className={styles.goToCart}>
            Ir al carrito
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
