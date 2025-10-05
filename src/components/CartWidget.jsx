import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.cartWidget}>
      <span className={styles.cartIcon}>🛒</span>
      <span className={styles.cartCount}>0</span>
    </div>
  );
};

export default CartWidget;
