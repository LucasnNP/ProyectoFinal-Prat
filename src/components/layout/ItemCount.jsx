import { useState } from "react";
import styles from "./ItemCount.module.css";

function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);

  return (
    <div className={styles.counter}>
      <div className={styles.controls}>
        <button
          onClick={decrease}
          className={styles.controlBtn}
          disabled={count <= 1}
        >
          −
        </button>
        <span className={styles.qty}>{count}</span>
        <button
          onClick={increase}
          className={styles.controlBtn}
          disabled={count >= stock}
        >
          +
        </button>
      </div>

      <button className={styles.add} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
