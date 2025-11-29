import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./CartItem.module.css";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);

  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.title} className={styles.img} />

      <div className={styles.info}>
        <h3>{item.title}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price}</p>
        <p>Subtotal: ${item.price * item.quantity}</p>
      </div>
      <button className={styles.deleteBtn} onClick={() => removeItem(item.id)}>
        ❌
      </button>
    </div>
  );
}

export default CartItem;
